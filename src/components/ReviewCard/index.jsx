import React from "react";

export default function ReviewCard({
  category,
  name,
  rate,
  description,
  author,
  date,
}) {
  return (
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      {/* Card */}
      <div className="card-lg card border">
        <div className="card-body">
          {/* Header */}
          <div className="row align-items-center mb-6">
            <div className="col-4">
              {/* Image */}
              <img
                src="/img/products/product-13.jpg"
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="col-8 ml-n2">
              {/* Preheading */}
              <a className="font-size-xs text-muted" href="shop.html">
                {category}
              </a>
              {/* Heading */}
              <a
                className="d-block font-weight-bold text-body"
                href="product.html"
              >
                {name}
              </a>
              {/* Rating */}
              <div
                className="rating font-size-xxs text-warning"
                data-value={rate}
              >
                <div className="rating-item">
                  <i className="fas fa-star" />
                </div>
                <div className="rating-item">
                  <i className="fas fa-star" />
                </div>
                <div className="rating-item">
                  <i className="fas fa-star" />
                </div>
                <div className="rating-item">
                  <i className="fas fa-star" />
                </div>
                <div className="rating-item">
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>
          {/* Blockquote */}
          <blockquote className="mb-0">
            <p className="text-muted">{description}</p>
            <footer className="font-size-xs text-muted">
              {author}, <time dateTime={date}>{date}</time>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
