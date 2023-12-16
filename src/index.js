import React from "react";
import ReactDOM from "react-dom/client";
import "../src/css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
       crossorigin="anonymous"
    ></link>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
