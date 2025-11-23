import { lazy, Suspense, useState } from "react";
import Navbar from "./components/navbar/Navbar";

import { Routes, Route } from "react-router";
import ProductsLoader from "./components/ProductLoader";
// import ProductShowcase from "./pages/product_showcase";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const ProductShowcase = lazy(() => import("./pages/product_showcase"));

  return (
    <div className="container mx-auto p-4">
      <Navbar cartCount={cart.length} onCartOpen={() => setCartOpen(true)} />

      <Suspense fallback={<ProductsLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductShowcase
                cartOpen={cartOpen}
                setCart={setCart}
                cart={cart}
                setCartOpen={setCartOpen}
              />
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
