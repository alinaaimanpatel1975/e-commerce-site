// cartCount is a prop coming from App.jsx.
// Props allow a parent component to send information to a child component.
import React from "react";
import { Link } from "react-router-dom";
function Navbar({ cartCount }) {
  return (
    <header className="navbar">

      <div className="navbar-main">

        <div className="logo">
          SHOPORA
        </div>

        <div className="search-container">

          <input
            type="text"
            placeholder="Search products..."
          />

          <button>🔍</button>

        </div>

        <div className="navbar-actions">

          <span>Account</span>

          <span>Orders</span>

          {/* 
            cartCount comes from App.jsx.
            Because this value is a prop, Navbar can display
            the current number of items in the cart.
          */}
          <Link to="/cart" className="cart">
  🛒 {cartCount}
</Link>

        </div>

      </div>

      <div className="category-bar">
        <span>☰ All</span>
        <span>Electronics</span>
        <span>Fashion</span>
        <span>Beauty</span>
        <span>Home</span>
        <span>Gaming</span>
        <span>Books</span>
        <span>Sports</span>
      </div>

    </header>
  )
}

export default Navbar