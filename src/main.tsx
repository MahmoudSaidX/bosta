import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./helpers/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Router basename="/"> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </Router> */}
  </React.StrictMode>
);
