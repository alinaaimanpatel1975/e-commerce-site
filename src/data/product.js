// An array stores multiple values.
//
// Here, each value inside the array is an object
// representing ONE product.
const products = [

  // Product 1
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    rating: 4.5,
  },

  // Product 2
  {
    id: 2,
    name: "Mechanical Gaming Keyboard",
    category: "Gaming",
    price: 3299,
    rating: 4.7,
  },

  // Product 3
  {
    id: 3,
    name: "Smart LED Desk Lamp",
    category: "Home",
    price: 1499,
    rating: 4.3,
  },

  // Product 4
  {
    id: 4,
    name: "Oversized Cotton T-Shirt",
    category: "Fashion",
    price: 899,
    rating: 4.4,
  },

  // Product 5
  {
    id: 5,
    name: "Hydrating Face Serum",
    category: "Beauty",
    price: 699,
    rating: 4.6,
  },

  // Product 6
  {
    id: 6,
    name: "Classic Hardcover Journal",
    category: "Books",
    price: 499,
    rating: 4.8,
  },

  // Product 7
  {
    id: 7,
    name: "Resistance Training Bands",
    category: "Sports",
    price: 799,
    rating: 4.2,
  },

  // Product 8
  {
    id: 8,
    name: "Wireless Gaming Mouse",
    category: "Gaming",
    price: 1899,
    rating: 4.6,
  },
];

// export default allows another file to import this data.
//
// App.jsx imports this as:
// import products from "./data/products";
export default products;