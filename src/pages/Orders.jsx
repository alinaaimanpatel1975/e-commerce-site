import React from "react";

function Orders({ orders }) {
  return (
    <main className="orders-page">

      <h1>My Orders</h1>

      {orders.length === 0 ? (

        /* EMPTY ORDERS */

        <div className="empty-orders">

          <div className="empty-orders-icon">
            📦
          </div>

          <h2>No orders yet</h2>

          <p>
            Your completed orders will appear here.
          </p>

        </div>

      ) : (

        /* ORDER HISTORY */

        <div className="orders-list">

          {orders.map((order) => (

            <div
              className="order-card"
              key={order.id}
            >

              <div className="order-header">

                <div>
                  <h2>Order #{order.id}</h2>

                  <p>
                    Placed on {order.date}
                  </p>
                </div>

                <strong>
                  ₹{order.total}
                </strong>

              </div>

              <div className="order-items">

                {order.items.map((item) => (

                  <div
                    className="order-item"
                    key={item.product.id}
                  >

                    <span>
                      {item.product.name}
                    </span>

                    <span>
                      ₹{item.product.price} × {item.quantity}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      )}

    </main>
  );
}

export default Orders;