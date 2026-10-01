import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({
  cart,
  cartCount,
  cartTotal,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) {

  const navigate = useNavigate();

  return (
    <main className="cart-page">

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">

          {/* CART ITEMS */}

          <div className="cart-items">

            {cart.map((item) => (
              <div
                className="cart-item"
                key={item.product.id}
              >
                <h2>{item.product.name}</h2>

                <p>
  ₹{item.product.price} × {item.quantity}
</p>

<p className="item-subtotal">
  Subtotal: ₹{item.product.price * item.quantity}
</p>

                <div className="quantity-controls">

                  {/* Decrease the quantity */}
                  <button
                    onClick={() =>
                      decreaseQuantity(item.product.id)
                    }
                  >
                    −
                  </button>

                  {/* Display the current quantity */}
                  <span>{item.quantity}</span>

                  {/* Increase the quantity */}
                  <button
                    onClick={() =>
                      increaseQuantity(item.product.id)
                    }
                  >
                    +
                  </button>

                  {/* Remove the product completely */}
                  <button
                    onClick={() =>
                      removeFromCart(item.product.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* ORDER SUMMARY */}

          <div className="cart-summary">

  <h2>Order Summary</h2>

  <p>
    Items ({cartCount}): ₹{cartTotal}
  </p>

  <p>
    Delivery: FREE
  </p>

  <hr />

  <p>
    Subtotal: ₹{cartTotal}
  </p>

<button
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout
</button>
</div>

        </div>
      )}

    </main>
  );
}

export default Cart;