import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./app/styles/index.css";

const rootView = document.getElementById("root");

if (rootView) {
  createRoot(rootView).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
