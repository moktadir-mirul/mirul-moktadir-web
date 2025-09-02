import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ConProvider from "./ConProvider/ConProvider.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ConProvider>
        <App />
      </ConProvider>
    </BrowserRouter>
  </StrictMode>
);
