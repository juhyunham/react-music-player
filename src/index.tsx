import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import musicPlayerReducer from "./store/musicPlayerReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: musicPlayerReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//web vital
reportWebVitals();
