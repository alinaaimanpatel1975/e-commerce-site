
// product and addToCart are both props coming from App.jsx.
//
// product = information about the product
// addToCart = function that allows this component to add the product to the cart
import React from "react";
function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">

      <div className="product-image">
        🛍️
      </div>

      {/* 
        We use dot notation to access a value
        inside the product object.

        product.category means:
        "Give me the category of this product."
      */}
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

      <button
        className="add-to-cart"

        /*
          onClick is a React event.

          It means:
          "When the user clicks this button,
          run this function."

          () => addToCart(product)
          sends THIS particular product to App.jsx.
        */
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;