import React, { useState } from 'react';

const containerStyle = {
  background: 'linear-gradient(to top, #ffffff, #b3d0ff)',
};

const NewItem = () => {
  // Initialize State Variables
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  // Creates a Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an item object
    const item = {
      name,
      quantity,
      category,
    };
    console.log(item);

    // Display an alert with the current state of name, quantity, and category
    alert(`Item: Name - ${name}, Quantity - ${quantity}, Category - ${category}`);
    
    // Reset the state variables to their initial values
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  // Render the Component
  return (
    <div className="flex items-center justify-center h-screen">
  <div className="rounded shadow-lg p-6" style={containerStyle}>
        <h2 className="text-2xl font-bold mb-4 text-black">New Item Component</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-black">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-black"
            />
          </div>

          {/* Quantity Field */}
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-black">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              max="99"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-black"
            />
          </div>

          {/* Category Field */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-black">Category</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-black"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewItem;
