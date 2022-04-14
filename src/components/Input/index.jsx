import React from "react";

export default function Input({ label, error, type, ...props }) {
  return (
    <div className="form-group">
      <input
        className="form-control form-control-sm"
        type={type || "text"}
        {...props}
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
