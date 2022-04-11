import classNames from "classnames";
import React from "react";
import "./style.scss";

export default function Button({
  children,
  rounded,
  type,
  cnames,
  iconRight,
  iconLeft,
}) {
  return (
    <button
      className={classNames("Button", {
        rounded,
        [type]: type,
        [cnames]: cnames,
      })}
    >
      {iconLeft && <i className={iconLeft} />}
      {children}
      {iconRight && <i className={iconRight} />}
    </button>
  );
}
