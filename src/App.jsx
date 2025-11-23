import { useState } from "react";
import Navbar from "./components/navbar/Navbar";

import { Routes, Route } from "react-router";
import ProductShowcase from "./pages/product_showcase";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <Navbar cartCount={cart.length} onCartOpen={() => setCartOpen(true)} />

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
    </div>
  );
}

export default App;
