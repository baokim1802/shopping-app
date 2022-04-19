import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./assets/stylelibs.min.css";
import "./assets/styles/styles.scss";
import "antd/dist/antd.css";
// import 'antd/lib/message/style/index.css'
// import 'antd/lib/date-picker/style/index.css'

import store from "./store";

const root = createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
