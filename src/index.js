import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { ContextProvider } from "./hooks/calendarContext";
import Main from "./Main";
import reducers from "./reducers";
import reportWebVitals from "./reportWebVitals";
import getStore from "./store/getStore";

import "./sass/index.scss";
import "./sass/app.scss";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={getStore(reducers)}>
      <ContextProvider>
        <Main />
        <ToastContainer />
      </ContextProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
