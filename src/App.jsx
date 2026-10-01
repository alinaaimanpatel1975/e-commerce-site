// useState is a React Hook.
//
// It allows a component to remember information
// that can change while the user interacts with the website.
import React, { useState, useEffect } from "react";

// These come from React Router.
// BrowserRouter = enables page navigation
// Routes = holds all our routes
// Route = defines an individual URL
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import products from "./data/product";
import Wishlist from "./pages/Wishlist";

function App() {

  /*
    STATE

    cart = the current value of our cart
    setCart = the function we use to change the cart

    [] means the cart starts as an empty array.
  */
/*
  Load the cart from localStorage when
  the application starts.

  localStorage stores data in the browser,
  so the cart can survive a page refresh.
*/
const [cart, setCart] = useState(() => {

  const savedCart = localStorage.getItem("shopora-cart");

  return savedCart
    ? JSON.parse(savedCart)
    : [];
});
const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");
const [sortOption, setSortOption] = useState("default");
/*
  Wishlist stores the products the user
  has marked as favorites.
*/
const [wishlist, setWishlist] = useState(() => {

  const savedWishlist = localStorage.getItem("shopora-wishlist");

  return savedWishlist
    ? JSON.parse(savedWishlist)
    : [];
});

/*
  Whenever the cart changes,
  save the new cart to localStorage.

  JSON.stringify() converts our JavaScript
  array into text because localStorage
  can only store strings.
*/
useEffect(() => {

  localStorage.setItem(
    "shopora-cart",
    JSON.stringify(cart)
  );

}, [cart]);

useEffect(() => {

  localStorage.setItem(
    "shopora-wishlist",
    JSON.stringify(wishlist)
  );

}, [wishlist]);

  // Calculate the total number of individual products
// currently inside the cart.
const cartCount = cart.reduce(
  (total, item) => total + item.quantity,
  0
);

/*
  Calculate the total price of everything
  currently inside the cart.

  Example:
  Headphones ₹2499 × 2 = ₹4998
  Keyboard ₹3299 × 1 = ₹3299

  Total = ₹8297
*/
const cartTotal = cart.reduce(
  (total, item) => total + item.product.price * item.quantity,
  0
);

/*
  Filter products using TWO conditions:

  1. Does the product match the search?
  2. Does the product belong to the selected category?

  Both conditions must be true.
*/
const filteredProducts = products.filter((product) => {

  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

const sortedProducts = [...filteredProducts].sort((a, b) => {

  if (sortOption === "price-low") {
    return a.price - b.price;
  }

  if (sortOption === "price-high") {
    return b.price - a.price;
  }

  if (sortOption === "rating-high") {
    return b.rating - a.rating;
  }

  return 0;
});


  /*
    This function runs when a user clicks
    "Add to Cart".
  */
  function addToCart(product) {

    // Check whether this product already exists
    // inside the cart.
    const productExists = cart.some(
      (item) => item.product.id === product.id
    );


    // If the product already exists,
    // increase its quantity.
    if (productExists) {

      const updatedCart = cart.map((item) => {

        if (item.product.id === product.id) {

          return {
            ...item,
            quantity: item.quantity + 1,
          };

        }

        return item;
      });

      setCart(updatedCart);

    } else {

      // If this is a new product,
      // add it with quantity 1.
      setCart([
        ...cart,
        {
          product: product,
          quantity: 1,
        },
      ]);
    }
  }
  /*
    Increase the quantity of a product
    already inside the cart.

    productId tells us WHICH product
    the user wants to increase.
  */
  function increaseQuantity(productId) {

    const updatedCart = cart.map((item) => {

      if (item.product.id === productId) {

        return {
          ...item,
          quantity: item.quantity + 1,
        };

      }

      return item;
    });

    setCart(updatedCart);
  }


  /*
    Decrease the quantity of a product
    already inside the cart.
  */
function decreaseQuantity(productId) {

  const updatedCart = cart
    .map((item) => {

      if (item.product.id === productId) {

        // If quantity is 1, mark this item for removal
        if (item.quantity === 1) {
          return null;
        }

        // Otherwise decrease the quantity by 1
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    })
    .filter((item) => item !== null);

  setCart(updatedCart);
}

    /*
    Remove a product completely from the cart.

    .filter() creates a new array containing
    only the items that pass our condition.

    We keep every item EXCEPT the one
    whose ID matches productId.
  */
  function removeFromCart(productId) {

    const updatedCart = cart.filter(
      (item) => item.product.id !== productId
    );

    setCart(updatedCart);
  }

  /*
  Add or remove a product from the wishlist.
*/
function toggleWishlist(product) {

  const alreadyLiked = wishlist.some(
    (item) => item.id === product.id
  );

  if (alreadyLiked) {

    const updatedWishlist = wishlist.filter(
      (item) => item.id !== product.id
    );

    setWishlist(updatedWishlist);

  } else {

    setWishlist([
      ...wishlist,
      product
    ]);

  }
}

  return (

    // BrowserRouter allows React to change
    // between pages without completely
    // reloading the website.
    <BrowserRouter>

      {/* Navbar appears on every page */}
      <Navbar
  cartCount={cartCount}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>

      {/* Routes contains all our website pages */}
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={

            <main className="products-section">

              <h1>Featured Products</h1>

              {/* SORTING */}
              <div className="sort-container">

                <label htmlFor="sort">
                  Sort By:
                </label>

                <select
                  id="sort"
                  value={sortOption}
                  onChange={(event) =>
                    setSortOption(event.target.value)
                  }
                >
                  <option value="default">
                    Default
                  </option>

                  <option value="price-low">
                    Price: Low → High
                  </option>

                  <option value="price-high">
                    Price: High → Low
                  </option>

                  <option value="rating-high">
                    Rating: High → Low
                  </option>
                </select>

              </div>

              {/* PRODUCT GRID */}
              <div className="product-grid">

                {sortedProducts.map((product) => (

                  <ProductCard
  key={product.id}
  product={product}
  addToCart={addToCart}
  wishlist={wishlist}
  toggleWishlist={toggleWishlist}
/>
                ))}

              </div>

            </main>

          }
        />

        {/* PRODUCT DETAILS PAGE */}
        <Route
  path="/product/:id"
  element={
    <ProductDetails
      addToCart={addToCart}
    />
  }
/>

        {/* CART PAGE */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              cartCount={cartCount}
              cartTotal={cartTotal}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />

        {/* WISHLIST PAGE */}
<Route
  path="/wishlist"
  element={
    <Wishlist
      wishlist={wishlist}
      toggleWishlist={toggleWishlist}
      addToCart={addToCart}
    />
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;