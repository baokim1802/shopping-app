import React from "react";
import classNames from "classnames";

export default function Feature({ title, subtitle, icon }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      {/* Item */}
      <div className="d-flex mb-6 mb-lg-0">
        {/* Icon */}
        <i
          className={classNames({ [icon]: icon }, "font-size-lg text-primary")}
        />
        {/* Body */}
        <div className="ml-6">
          {/* Heading */}
          <h6 className="heading-xxs mb-1">{title}</h6>
          {/* Text */}
          <p className="mb-0 font-size-sm text-muted">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
