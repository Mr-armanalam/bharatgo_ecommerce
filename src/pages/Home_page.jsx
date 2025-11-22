import React, { useState } from "react";
import ProductDetail from "../components/ProductDetail";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../components/CartDrawer";

const Home_page = ({ filtered_item, setCartOpen, cartOpen, setCart, cart }) => {
  const [detailProduct, setDetailProduct] = useState(null);

  function addToCart(product) {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((cart_item) =>
          cart_item.id === product.id
            ? { ...cart_item, qty: cart_item.qty + 1 }
            : cart_item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function increment(id) {
    setCart(
      cart.map((cart_item) =>
        cart_item.id === id
          ? { ...cart_item, qty: cart_item.qty + 1 }
          : cart_item
      )
    );
  }

  function decrement(id) {
    setCart(
      cart.map((cart_item) =>
        cart_item.id === id && cart_item.qty > 1
          ? { ...cart_item, qty: cart_item.qty - 1 }
          : cart_item
      )
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((cart_item) => cart_item.id !== id));
  }


  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filtered_item.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => addToCart(product)}
            onOpenDetail={() => setDetailProduct(product)}
          />
        ))}
      </div>
      {detailProduct && (
        <ProductDetail
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
          onAdd={() => addToCart(detailProduct)}
        />
      )}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onIncrement={increment}
          onDecrement={decrement}
          onRemove={removeFromCart}
        />
      )}
    </>
  );
};

export default Home_page;
