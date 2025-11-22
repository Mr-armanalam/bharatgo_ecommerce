import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCategories } from "../../utils/api";
import { FaCartShopping } from "react-icons/fa6";
import MobileNavbar from "./mobile-navbar";

export default function Navbar({ search, onSearch, cartCount, onCartOpen }) {
  const [categories, setCategories] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentActiveCat = searchParams.get("category");
  console.log(searchParams.get("category"));

  function filterProducts(cat) {
    const newParams = new URLSearchParams();
    newParams.set("category", cat);
    setSearchParams(newParams);
  }

  useEffect(() => {
    async function loadCategories() {
      const data = await fetchCategories();
      setCategories(["All", ...data.slice(0,5).map((c) => c.name)]);
    }

    loadCategories();
  }, []);
  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-2xl max-sm:text-lg font-bold">E commerce</h1>

      <div className="flex gap-4 max-sm:hidden">
        {categories.map((cat) => (
          <p
            key={cat}
            className={`${
              currentActiveCat === cat ? "font-bold underline" : ""
            } cursor-pointer`}
            onClick={() => filterProducts(cat)}
          >
            {cat}
          </p>
        ))}
      </div>

      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="border rounded px-3 py-1 max-sm:text-sm"
        placeholder="Search a product"
      />

      <div className="relative flex items-center">
        <button onClick={onCartOpen}>
          <FaCartShopping size={19} />
        </button>
        <span className="absolute -right-3 -top-3 bg-red-600 px-0.5 text-white rounded-full w-fit h-fit text-xs">
          {cartCount}
        </span>
      </div>

      <MobileNavbar
        categories={categories}
        currentActiveCat={currentActiveCat}
        filterProducts={filterProducts}
      />
    </div>
  );
}
