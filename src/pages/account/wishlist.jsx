import React from "react";
import { useSearchParams } from "react-router-dom";
import ListView from "../../components/ListView";
import Paginate from "../../components/Paginate";
import ProductCard, { ProductCardLoading } from "../../components/ProductCard";
import useQuery from "../../core/hooks/useQuery";
import { convertQueryURLToObject } from "../../core/utils/url";
import { profileService } from "../../services/profileService";

export default function WishList() {
  const query = useSearchParams();
  const objUrl = convertQueryURLToObject(query[0].toString());
  const page = parseInt(objUrl.page || "1");
  const {
    data: products,
    loading: productLoading,
    paginate,
  } = useQuery(() => profileService.getWishList(`?page=${page}`), [page]);

  return (
    <div>
      {/* Products */}
      <div className="row">
        <ListView
          LoadingComponent={ProductCardLoading}
          items={products}
          loadingCount={6}
          isLoading={productLoading}
          render={(e) => <ProductCard key={e.id} {...e} />}
        />
      </div>
      {/* Pagination */}
      <Paginate totalPage={paginate?.totalPage} />
    </div>
  );
}
