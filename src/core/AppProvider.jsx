import React from "react";
import { BrowserRouter } from "react-router-dom";

export function AppProvider({ children, store }) {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
}
