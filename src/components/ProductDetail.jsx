import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function ProductDetail({ product, onClose, onAdd }) {
  return (
    <div className="fixed right-0 top-0 w-[400px] h-full bg-white shadow-lg py-4 px-6 cursor-pointer overflow-auto">
      <RxCross2 className="ml-auto mb-4" onClick={onClose} />
      <img
        src={product.images[0]}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-4">${product.price}</h2>
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-gray-600 text-sm mt-2">{product.description}</p>
      <button
        onClick={onAdd}
        className="w-full mt-4 bg-black text-white py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
