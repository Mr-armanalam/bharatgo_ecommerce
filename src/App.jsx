import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";

import { fetchProducts } from "./utils/api";
import { Routes, Route, useSearchParams } from "react-router";
import Home_page from "./pages/Home_page";

function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchParams] = useSearchParams();

  function searchProducts(value) {
    setSearch(value);
    setFiltered(
      products.filter((p) =>
        p.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts();
      setProducts(data);
      const category = searchParams.get("category");
      if (category === null || category === "All") return setFiltered(data);
      setFiltered(data.filter((product) => product.category.name === category));
    }
    fetchData();
  }, [searchParams]);

  return (
    <div className="container mx-auto p-4">
      <Navbar
        search={search}
        onSearch={searchProducts}
        cartCount={cart.length}
        onCartOpen={() => setCartOpen(true)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home_page
              filtered_item={filtered}
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
