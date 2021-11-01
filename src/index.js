import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/_base.scss";
import "antd/dist/antd.css";
import { Spin } from "antd";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";

import "./utils/i18n";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense
          fallback={
            <div className="example">
              <Spin />
            </div>
          }
        >
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
