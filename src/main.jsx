import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TareaContentProvider } from "./context/TareaContent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TareaContentProvider>
      <App />
    </TareaContentProvider>
  </React.StrictMode>
);
