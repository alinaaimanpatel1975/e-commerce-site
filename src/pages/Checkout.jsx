import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout({
  cart,
  cartTotal,
  placeOrder
}) {
  const navigate = useNavigate();

  // If the cart is empty, there is nothing to checkout.
  if (cart.length === 0) {
    return (
      <main className="checkout-page">

        <h1>Checkout</h1>

        <div className="empty-checkout">

          <h2>Your cart is empty</h2>

          <p>Add some products before checking out.</p>

          <button onClick={() => navigate("/")}>
            Continue Shopping
          </button>

        </div>

      </main>
    );
  }

  return (
    <main className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-content">

        {/* ORDER ITEMS */}

        <div className="checkout-items">

          <h2>Review Your Order</h2>

          {cart.map((item) => (
            <div
              className="checkout-item"
              key={item.product.id}
            >

              <div>
                <h3>{item.product.name}</h3>

                <p>
                  ₹{item.product.price} × {item.quantity}
                </p>
              </div>

              <strong>
                ₹{item.product.price * item.quantity}
              </strong>

            </div>
          ))}

        </div>

        {/* ORDER SUMMARY */}

        <div className="checkout-summary">

          <h2>Order Summary</h2>

          <p>
            Items: ₹{cartTotal}
          </p>

          <p>
            Delivery: FREE
          </p>

          <hr />

          <h3>
            Total: ₹{cartTotal}
          </h3>

          <button
  onClick={() => {
    placeOrder();
    navigate("/orders");
  }}
  className="place-order-button"
>
  Place Order
</button>
        </div>

      </div>

    </main>
  );
}

export default Checkout;