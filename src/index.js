import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreContext } from "redux-react-hook";
import { makeStore } from "./store/index";
import "./styles.css";

const rootElement = document.getElementById("root");
const store = makeStore();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  rootElement
);
