import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import { useSearchParams } from "react-router-dom";
import { ProductsContext } from "../hooks/useProducts";

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);

      if (!category || category === "All") {
        setFiltered(data);
      } else {
        setFiltered(data.filter((p) => p.category.name === category));
      }
      setLoading(false);
    }

    loadProducts();
  }, [category]);

  function searchProducts(text) {
    setSearch(text);

    setFiltered(
      products.filter((p) => p.title.toLowerCase().includes(text.toLowerCase()))
    );
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        filtered,
        search,
        searchProducts,
        loading
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
