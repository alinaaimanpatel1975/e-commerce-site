import React from "react";
import { Link } from "react-router-dom";

function ProductCard({
  product,
  addToCart,
  wishlist,
  toggleWishlist
}) {

  // Check whether this product is already
  // inside the wishlist.
  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <div className="product-card">

      {/* Wishlist button */}

      <button
        className="wishlist-button"
        onClick={() => toggleWishlist(product)}
      >
        {isWishlisted ? "♥" : "♡"}
      </button>

      {/* Product information */}

      <Link
        to={`/product/${product.id}`}
        className="product-link"
      >

        <div className="product-image">
  <img
    src={product.image}
    alt={product.name}
  />
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

      <button
        className="add-to-cart"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;