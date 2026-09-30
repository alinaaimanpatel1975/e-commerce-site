import React from "react";

function Cart({ cart }) {
  return (
    <main className="cart-page">

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">

          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.product.id}
            >
              <h2>{item.product.name}</h2>

              <p>₹{item.product.price}</p>

              <p>
                Quantity: {item.quantity}
              </p>
            </div>
          ))}

        </div>
      )}

    </main>
  );
}

export default Cart;