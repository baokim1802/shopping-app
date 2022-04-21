import { Drawer, Skeleton } from "antd";
import React, { useState } from "react";
import { generatePath, Link, useNavigate } from "react-router-dom";
import { PRODUCT_DETAIL_PATH, PRODUCT_PATH } from "../../core/constants/path";
import { useQueryURL } from "../../core/hooks";
import { productService } from "../../services/productService";
import { currency } from "../../core/utils/number";
import ListView from "../../components/ListView";

export default function SearchModal({ visible, onClose }) {
  const navigate = useNavigate();
  const queryObj = useQueryURL();
  const [value, setValue] = useState();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchChange = (ev) => {
    setValue(ev.target.value);
  };

  const onKeyUp = (ev) => {
    if (ev.key === "Enter") {
      searchProducts();
    }
  };

  const searchProducts = async () => {
    setIsLoading(true);
    // navigate(PRODUCT_PATH + "?q=" + value);
    const product = await productService.getProduct(
      `?name=${encodeURI(value)}&limit=5`
    );
    setProduct(product.data);
    setIsLoading(false);
  };

  return (
    <Drawer
      visible={visible}
      closeIcon={null}
      headerStyle={{ display: "none" }}
      width={470}
      bodyStyle={{ padding: 0 }}
      onClose={onClose}
    >
      <div id="modalSearch">
        <div className="modal-dialog modal-dialog-vertical" role="document">
          <div className="modal-content">
            {/* Close */}
            <button type="button" className="close" onClick={onClose}>
              <i className="fe fe-x" aria-hidden="true" />
            </button>
            {/* Header*/}
            <div className="modal-header line-height-fixed font-size-lg">
              <strong className="mx-auto">Search Products</strong>
            </div>
            {/* Body: Form */}
            <div className="modal-body">
              <div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="modalSearchCategories">
                    Categories:
                  </label>
                  <select className="custom-select" id="modalSearchCategories">
                    <option defaultValue="">All Categories</option>
                    <option>Women</option>
                    <option>Men</option>
                    <option>Kids</option>
                  </select>
                </div>
                <div className="input-group input-group-merge">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    value={value}
                    onChange={onSearchChange}
                    onKeyUp={onKeyUp}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-border"
                      onClick={searchProducts}
                    >
                      <i className="fe fe-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Body: Results (add `.d-none` to disable it) */}

            {product.length > 0 && (
              <div className="modal-body border-top font-size-sm">
                {/* Heading */}
                <p>Search Results:</p>
                {/* Items */}
                {/* {product.map((e) => (
                  <SearchItem key={e.id} {...e} />
                ))} */}

                <ListView
                  items={product}
                  loadingCount={5}
                  isLoading={isLoading}
                  LoadingComponent={SearchItemLoading}
                  render={(e) => <SearchItem key={e.id} {...e} />}
                />
                {/* Button */}
                <Link
                  className="btn btn-link px-0 text-reset"
                  to={PRODUCT_PATH + "?q=" + value}
                  onClick={(ev) => onClose()}
                >
                  View All <i className="fe fe-arrow-right ml-2" />
                </Link>
              </div>
            )}
            {/* Body: Empty (remove `.d-none` to disable it) */}
            {product.length === 0 && (
              <div className="modal-body">
                {/* Text */}
                <p className="mb-3 font-size-sm text-center">
                  Nothing matches your search
                </p>
                <p className="mb-0 font-size-sm text-center">😞</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Drawer>
  );
}

const SearchItemLoading = () => {
  return (
    <div className="row align-items-center position-relative mb-5">
      <div className="col-4 col-md-3">
        <Skeleton width={44} height={44} />
      </div>
      <div className="col position-static">
        {/* Text */}
        <div className="mb-0 font-weight-bold">
          <Skeleton height={43} variant="text" />
          <Skeleton height={20} width="30%" variant="text" />
          {/* <span className="text-muted">{currency(real_price)}</span> */}
        </div>
      </div>
    </div>
  );
};

const SearchItem = ({ name, real_price, price, thumbnail_url, slug }) => {
  return (
    <div className="row align-items-center position-relative mb-5">
      <div className="col-4 col-md-3">
        {/* Image */}
        <img className="img-fluid" src={thumbnail_url} alt="..." />
      </div>
      <div className="col position-static">
        {/* Text */}
        <p className="mb-0 font-weight-bold">
          <Link
            className="stretched-link text-body"
            to={generatePath(PRODUCT_DETAIL_PATH, { slug })}
          >
            {name}
          </Link>{" "}
          <br />
          <span className="text-muted">{currency(real_price)}</span>
        </p>
      </div>
    </div>
  );
};
