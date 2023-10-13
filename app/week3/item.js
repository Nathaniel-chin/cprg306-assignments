import React from 'react';
import Link from 'next/link';

function Item({ name, quantity, category }) {
  return (
    <li className="border border-gray-300 rounded p-4 my-2 flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500">Category: {category}</p>
      </div>
      <div>
        <span className="text-blue-500 text-lg">{quantity}</span>
      </div>
    </li>
  );
}

export default Item;
