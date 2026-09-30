// useState is a React Hook.
//
// It allows a component to remember information
// that can change while the user interacts with the website.
import React, { useState } from "react";

// These come from React Router.
// BrowserRouter = enables page navigation
// Routes = holds all our routes
// Route = defines an individual URL
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./pages/Cart";

import products from "./data/product";

function App() {

  /*
    STATE

    cart = the current value of our cart
    setCart = the function we use to change the cart

    [] means the cart starts as an empty array.
  */
  const [cart, setCart] = useState([]);


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


  return (

    // BrowserRouter allows React to change
    // between pages without completely
    // reloading the website.
    <BrowserRouter>

      {/* Navbar appears on every page */}
      <Navbar cartCount={cart.length} />


      {/* Routes contains all our website pages */}
      <Routes>


        {/* HOME PAGE */}
        <Route
          path="/"
          element={

            <main className="products-section">

              <h1>Featured Products</h1>

              <div className="product-grid">

                {products.map((product) => (

                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />

                ))}

              </div>

            </main>

          }
        />


        {/* CART PAGE */}
        <Route
          path="/cart"
          element={<Cart cart={cart} />}
        />


      </Routes>

    </BrowserRouter>
  );
}

export default App;