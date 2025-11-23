import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/productContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </BrowserRouter>
);
