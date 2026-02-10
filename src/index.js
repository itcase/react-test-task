import React from "react";

import App from "./App";

import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./store";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
