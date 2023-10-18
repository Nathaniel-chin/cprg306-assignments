"use client";
import React, { useState } from 'react'; // Import useState for state management
import ItemList from './item-list'; 
import NewItem from './new-item';
import itemsData from './items.json'; // Import items.json

function Page() {
  // Initialize a state variable (items) with the data from items.json
  const [items, setItems] = useState(itemsData);

  // Create an event handler function (handleAddItem) to add a new item to items
  const handleAddItem = (newItem) => {
    // Add the newItem to the existing items array
    setItems([...items, newItem]);
  };

  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold text-center">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} /> {/* Pass the handleAddItem event handler to the NewItem component */}
      <ItemList items={items} /> {/* Pass the items state to the ItemList component */}
    </main>
  );
}

export default Page;
