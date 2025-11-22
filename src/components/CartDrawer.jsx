import React from "react";

export default function CartDrawer({
  cart,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="fixed right-0 top-0 w-96 h-full bg-white shadow-lg p-4 overflow-auto">
      <button className="text-right w-full" onClick={onClose}>
        X
      </button>
      <h2 className="text-xl font-bold mb-4">My Order</h2>

      {cart.map((i) => (
        <div key={i.id} className="flex items-center justify-between mb-4">
          <img src={i.images[0]} className="w-16 h-16 rounded object-cover" />
          <div>
            <p className="font-semibold">{i.title}</p>
            <p>${i.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => onDecrement(i.id)}>-</button>
            <span>{i.qty}</span>
            <button onClick={() => onIncrement(i.id)}>+</button>
          </div>

          <button onClick={() => onRemove(i.id)}>X</button>
        </div>
      ))}

      <p className="font-bold text-xl mt-4">Total: ${total}</p>
      <button className="w-full bg-black text-white py-2 rounded mt-2">
        Checkout
      </button>
    </div>
  );
}
