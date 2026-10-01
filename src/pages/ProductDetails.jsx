import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/product";

function ProductDetails({ addToCart }) {

  // Get the product ID from the URL.
  const { id } = useParams();

  // Find the matching product.
  const product = products.find(
    (product) => product.id === Number(id)
  );

  // Used to move the user between pages.
  const navigate = useNavigate();

  // Keeps track of how many units the user wants.
  const [quantity, setQuantity] = useState(1);

  // If the URL contains an invalid product ID.
  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product not found</h1>

        <button onClick={() => navigate("/")}>
          Back to Products
        </button>
      </main>
    );
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleAddToCart() {

    // Add the product once for each selected quantity.
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    navigate("/cart");
  }

  return (
    <main className="product-details">

      {/* BACK BUTTON */}

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Products
      </button>

      <div className="product-details-content">

        {/* PRODUCT IMAGE */}

        <div className="details-image">
          🛍️
        </div>

        {/* PRODUCT INFORMATION */}

        <div className="details-info">

          <p className="product-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <p className="product-rating">
            ⭐ {product.rating} / 5
          </p>

          <p className="details-price">
            ₹{product.price}
          </p>

          <p className="details-description">
            High-quality {product.name.toLowerCase()} designed
            for everyday use. Shop confidently with Shopora.
          </p>

          {/* QUANTITY */}

          <div className="details-quantity">

            <span>Quantity:</span>

            <div className="quantity-controls">

              <button onClick={decreaseQuantity}>
                −
              </button>

              <span>{quantity}</span>

              <button onClick={increaseQuantity}>
                +
              </button>

            </div>

          </div>

          {/* ADD TO CART */}

          <button
            className="details-add-button"
            onClick={handleAddToCart}
          >
            Add {quantity} to Cart
          </button>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;