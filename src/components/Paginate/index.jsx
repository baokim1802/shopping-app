import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { changeQueryURL, convertQueryURLToObject } from "../../core/utils/url";

export default function Paginate({ totalPage }) {
  const query = useSearchParams();
  const objUrl = convertQueryURLToObject(query[0].toString());
  const currentPage = parseInt(objUrl.page || "1");
  const renderPage = () => {
    if (totalPage <= 1) return;

    let start = currentPage - 2;
    let end = currentPage + 2;

    if (start < 1) {
      start = 1;
      end = 5;
    }

    if (end > totalPage) {
      end = totalPage;
      start = end - 4;
      if (start < 1) start = 1;
    }

    let list = [];
    for (let i = start; i <= end; i++) {
      list.push(
        <li className={`page-item ${currentPage == i ? "active" : ""}`} key={i}>
          <Link
            className="page-link"
            to={changeQueryURL({ ...objUrl, page: i })}
          >
            {i}
          </Link>
        </li>
      );
    }
    return list;
  };

  return (
    <nav className="d-flex justify-content-center justify-content-md-end">
      <ul className="pagination pagination-sm text-gray-400">
        {currentPage > 1 && (
          <li className="page-item">
            <Link
              className="page-link page-link-arrow"
              to={changeQueryURL({ ...objUrl, page: currentPage - 1 })}
            >
              <i className="fa fa-caret-left" />
            </Link>
          </li>
        )}
        {renderPage()}
        {currentPage < totalPage && (
          <li className="page-item">
            <Link
              className="page-link page-link-arrow"
              to={changeQueryURL({ ...objUrl, page: currentPage + 1 })}
            >
              <i className="fa fa-caret-right" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
