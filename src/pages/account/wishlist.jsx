import React from "react";
import { useSearchParams } from "react-router-dom";
import ListView from "../../components/ListView";
import Paginate from "../../components/Paginate";
import ProductCard, { ProductCardLoading } from "../../components/ProductCard";
import WishListCard from "../../components/WishListCard";
import { usePage } from "../../core/hooks/usePage";
import useQuery from "../../core/hooks/useQuery";
import { convertQueryURLToObject } from "../../core/utils/url";
import { profileService } from "../../services/profileService";

export default function WishList() {
  const page = usePage();
  const {
    data: products,
    loading: productLoading,
    paginate,
    refetch,
  } = useQuery(() => profileService.getWishList(`?page=${page}`), [page]);
  const onRemoveWishList = () => {
    refetch();
  };

  return (
    <div>
      {/* Products */}
      <div className="row">
        <ListView
          LoadingComponent={ProductCardLoading}
          loadingCount={6}
          isLoading={productLoading}
          items={products}
          render={(e) => (
            <WishListCard
              key={e.id}
              {...e.product}
              onRemoveWishList={onRemoveWishList}
            />
          )}
        />
      </div>
      {/* Pagination */}
      <Paginate totalPage={paginate?.totalPage} />
    </div>
  );
}
