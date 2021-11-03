import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/_base.scss";
import "antd/dist/antd.css";
import { Spin } from "antd";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store/store";
import {persistor} from "./store/store";
import { BrowserRouter } from "react-router-dom";

import "./utils/i18n";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense
            fallback={
              <div className="example">
                <Spin />
              </div>
            }
          >
            <App />
          </Suspense>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
