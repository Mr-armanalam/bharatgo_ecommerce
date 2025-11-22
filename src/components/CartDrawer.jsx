import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function CartDrawer({
  cart,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="fixed right-0 top-0 w-[400px] h-full bg-white shadow-lg p-4 overflow-auto">
      <RxCross2 className="ml-auto cursor-pointer mb-4" onClick={onClose} />
      <h2 className="text-xl font-bold mb-4">My Order</h2>

      {cart.map((i) => (
        <div
          key={i.id}
          className="flex mr-auto items-center gap-x-2 relative justify-between mb-4"
        >
          <img src={i.images[0]} className="w-18 h-18 rounded object-cover" />
          <div className="">
            <p className="font-semibold line-clamp-2 text-sm">{i.title}</p>
            <p className="mt-2">${i.price}</p>
          </div>

          <div className="flex mt-auto bg-gray-300 px-2 rounded-sm py-1 items-center">
            <button
              className="bg-white px-2 mr-2 cursor-pointer rounded"
              onClick={() => onDecrement(i.id)}
            >
              -
            </button>
            <span>{i.qty}</span>
            <button
              className="bg-white px-2 ml-2 cursor-pointer rounded"
              onClick={() => onIncrement(i.id)}
            >
              +
            </button>
          </div>

          <button
            className="absolute border rounded-full pl-px cursor-pointer h-4 w-4 top-0 right-0"
            onClick={() => onRemove(i.id)}
          >
            <RxCross2 size={12} />
          </button>
        </div>
      ))}

      <p className="font-bold text-xl mt-4">Total: ${total}</p>
      <button className="w-full bg-black text-white py-2 rounded mt-2">
        Checkout
      </button>
    </div>
  );
}
