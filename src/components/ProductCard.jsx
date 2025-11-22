import React from "react";

export default function ProductCard({ product, onAdd, onOpenDetail }) {
  return (
    <div className="border rounded p-3 shadow-sm hover:shadow-lg cursor-pointer relative">
      <img
        src={product.images[0]}
        className="w-full h-48 object-cover rounded"
        onClick={onOpenDetail}
      />

      <div
        className="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
        onClick={onAdd}
      >
        +
      </div>

      <p className="text-sm text-gray-500 mt-2">{product.category.name}</p>
      <p className="font-semibold">{product.title}</p>
      <p className="font-bold">${product.price}</p>
    </div>
  );
}
