import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  // Initialize State Variable
  const [sortBy, setSortBy] = useState('name');

  // Sort the Items
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
    
  });

  // Create Sort Buttons
  const isSortedByName = sortBy === 'name';
  const isSortedByCategory = sortBy === 'category';

  return (
    <div style={{ color: 'white' }}>
      <div>
        <button
          onClick={() => setSortBy('name')}
          className={`mr-2 ${isSortedByName ? 'bg-blue-500 text-white' : ''}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`mr-2 ${isSortedByCategory ? 'bg-blue-500 text-white' : ''}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('grouped')}
          className={`mr-2 ${sortBy === 'grouped' ? 'bg-blue-500 text-white' : ''}`}
        >
          Group by Category
        </button>
      </div>
      {sortBy === 'grouped' ? (
        <div>
          {Object.keys(sortedItems.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {})).sort(sortAlphabetically).map((category) => (
            <div key={category}>
              <h2>{category}</h2>
              {sortedItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <Item key={item.id} item={item} />
                ))}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;

function sortAlphabetically(a, b) {
  return a.localeCompare(b);
}
