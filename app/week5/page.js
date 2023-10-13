"use client";
import React from 'react';
import ItemList from './item-list'; 
import Link from 'next/link';

function Page() {
  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold text-center">Shopping List</h1>
      <ItemList /> {/* Render the ItemList component */}
    </main>
  );
}

export default Page;
