import React from "react";
import { generatePath, Link } from "react-router-dom";
import { currency } from "../../core/utils/number";
import { PRODUCT_DETAIL_PATH } from "../../core/constants/path";
import QuickViewModal from "../QuickViewModal";
import { useToggle } from "../../core/hooks/useToggle";
import { profileService } from "../../services/profileService";
import { message } from "antd";

export default function WishListCard(props) {
  const {
    name,
    real_price,
    price,
    thumbnail_url,
    slug,
    _id,
    onRemoveWishList,
  } = props;
  const isShowModal = useToggle();
  const onClickRemoveWishList = async () => {
    const res = await profileService.removeWishList(_id);

    if (res.deleteCount) {
      message.success(`${name} has been removed from wishlist`);
      onRemoveWishList();
    }
  };

  return (
    <>
      <div className="col-6 col-md-4">
        <div className="card mb-7">
          {/* Image */}
          <div className="card-img">
            {/* Action */}
            <button
              className="btn btn-xs btn-circle btn-white-primary card-action card-action-right"
              onClick={onClickRemoveWishList}
            >
              <i className="fe fe-x" />
            </button>
            {/* Badge */}
            <span className="badge badge-dark card-badge card-badge-left text-uppercase">
              Sale
            </span>
            {/* Button */}
            <button
              className="btn btn-xs btn-block btn-dark card-btn"
              data-toggle="modal"
              data-target="#modalProduct"
              onClick={isShowModal.setTrue}
            >
              <i className="fe fe-eye mr-2 mb-1" /> Quick View
            </button>
            {/* Image */}
            <img className="card-img-top" src={thumbnail_url} alt="..." />
          </div>
          {/* Body */}
          <div className="card-body font-weight-bold text-center">
            <Link
              className="text-body"
              to={generatePath(PRODUCT_DETAIL_PATH, { slug })}
            >
              {name}
            </Link>
            <br />
            <span>
              <span className="font-size-xs text-gray-350 text-decoration-line-through">
                {currency(price)}
              </span>
              <span className="text-primary">{currency(real_price)}</span>
            </span>
          </div>
        </div>
      </div>
      <QuickViewModal
        visible={isShowModal.value}
        {...props}
        onCancel={isShowModal.setFalse}
      />
    </>
  );
}
