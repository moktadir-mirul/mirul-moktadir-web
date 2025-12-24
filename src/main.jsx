import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ConProvider from "./ConProvider/ConProvider.jsx";
import { BrowserRouter } from "react-router";
import { MyRouter } from "./MyRouter/MyRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ConProvider>
        <MyRouter></MyRouter>
      </ConProvider>
    </BrowserRouter>
  </StrictMode>
);
