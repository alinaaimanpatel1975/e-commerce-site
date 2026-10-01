// cartCount is a prop coming from App.jsx.
// Props allow a parent component to send information to a child component.
import React from "react";
import { Link } from "react-router-dom";
function Navbar({ cartCount, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) {
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
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>
          <button>🔍</button>

        </div>

        <div className="navbar-actions">

          <span>Account</span>

<span>Orders</span>

<Link
  to="/wishlist"
  className="wishlist-link"
>
  ♥ Wishlist
</Link>

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

  {/* 
    When a category is clicked,
    setSelectedCategory() updates the state
    inside App.jsx.
  */}

  <span
    className={selectedCategory === "All" ? "active-category" : ""}
    onClick={() => setSelectedCategory("All")}
  >
    ☰ All
  </span>

  <span
    className={selectedCategory === "Electronics" ? "active-category" : ""}
    onClick={() => setSelectedCategory("Electronics")}
  >
    Electronics
  </span>

  <span
    className={selectedCategory === "Fashion" ? "active-category" : ""}
    onClick={() => setSelectedCategory("Fashion")}
  >
    Fashion
  </span>

  <span
    className={selectedCategory === "Beauty" ? "active-category" : ""}
    onClick={() => setSelectedCategory("Beauty")}
  >
    Beauty
  </span>

  <span
    className={selectedCategory === "Home" ? "active-category" : ""}
    onClick={() => setSelectedCategory("Home")}
  >
    Home
  </span>

  <span
    className={selectedCategory === "Gaming" ? "active-category" : ""}
    onClick={() => setSelectedCategory("Gaming")}
  >
    Gaming
  </span>

  <span
    className={selectedCategory === "Books" ? "active-category" : ""}
    onClick={() => setSelectedCategory("Books")}
  >
    Books
  </span>

  <span
    className={selectedCategory === "Sports" ? "active-category" : ""}
    onClick={() => setSelectedCategory("Sports")}
  >
    Sports
  </span>

</div>

    </header>
  )
}

export default Navbar