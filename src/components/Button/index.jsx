import classNames from "classnames";
import React from "react";
import "./style.scss";

export default function Button({ children, rounded, type, cnames }) {
  return (
    <button
      className={classNames("Button", {
        rounded,
        [type]: type,
        [cnames]: cnames,
      })}
    >
      {children}
    </button>
  );
}
