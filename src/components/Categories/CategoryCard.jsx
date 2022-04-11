import React from "react";
import Button from "../Button";

export default function CategoryCard({ type, backgroundImage }) {
  return (
    <div
      className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
      style={{ backgroundImage: backgroundImage }}
    >
      <div
        className="card bg-dark-5 bg-hover text-white text-center"
        style={{ minHeight: 470 }}
      >
        <div className="card-body mt-auto mb-n11 py-8">
          {/* Heading */}
          <h1 className="mb-0 font-weight-bolder">{type}</h1>
        </div>
        <div className="card-body mt-auto py-8">
          <Button cnames="btn btn-white" iconRight="fe fe-arrow-right ml-2">
            Shop {type}
          </Button>
        </div>
      </div>
    </div>
  );
}
