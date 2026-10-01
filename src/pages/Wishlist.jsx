import React from "react";
import { Link } from "react-router-dom";

function Wishlist({
  wishlist,
  toggleWishlist,
  addToCart
}) {
  return (
    <main className="wishlist-page">

      <div className="wishlist-header">
        <h1>My Wishlist</h1>

        <p>
          {wishlist.length}{" "}
          {wishlist.length === 1 ? "item" : "items"} saved
        </p>
      </div>

      {/* EMPTY WISHLIST */}

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">

          <div className="empty-wishlist-icon">
            ♡
          </div>

          <h2>Your wishlist is empty</h2>

          <p>
            Save products you love and find them here later.
          </p>

          <Link
            to="/"
            className="continue-shopping"
          >
            Continue Shopping
          </Link>

        </div>
      ) : (

        /* WISHLIST PRODUCTS */

        <div className="wishlist-grid">

          {wishlist.map((product) => (

            <div
              className="wishlist-card"
              key={product.id}
            >

              {/* REMOVE FROM WISHLIST */}

              <button
                className="remove-wishlist"
                onClick={() =>
                  toggleWishlist(product)
                }
                aria-label="Remove from wishlist"
              >
                ♥
              </button>

              {/* PRODUCT */}

              <Link
                to={`/product/${product.id}`}
                className="product-link"
              >

                <div className="wishlist-image">
                  🛍️
                </div>

                <p className="product-category">
                  {product.category}
                </p>

                <h2>{product.name}</h2>

                <p className="product-rating">
                  ⭐ {product.rating}
                </p>

                <p className="product-price">
                  ₹{product.price}
                </p>

              </Link>

              {/* ADD TO CART */}

              <button
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>
      )}

    </main>
  );
}

export default Wishlist;