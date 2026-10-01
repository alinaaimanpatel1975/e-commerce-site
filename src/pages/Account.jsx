import React from "react";
import { Link } from "react-router-dom";

function Account() {
  return (
    <main className="account-page">
      <div className="account-header">
        <p className="page-label">MY ACCOUNT</p>
        <h1>Welcome back</h1>
        <p>Manage your Shopora account and orders.</p>
      </div>

      <div className="account-card">
        <div className="account-avatar">
          👤
        </div>

        <div className="account-info">
          <h2>Shopora Customer</h2>
          <p>Welcome back to your Shopora account.</p>
        </div>
      </div>

      <div className="account-sections">
        <Link to="/orders" className="account-option">
          <span className="account-option-icon">📦</span>

          <div>
            <h3>My Orders</h3>
            <p>View your previous orders.</p>
          </div>

          <span className="account-arrow">→</span>
        </Link>

        <Link to="/wishlist" className="account-option">
          <span className="account-option-icon">♥</span>

          <div>
            <h3>Wishlist</h3>
            <p>View products you've saved.</p>
          </div>

          <span className="account-arrow">→</span>
        </Link>

        <div className="account-option">
          <span className="account-option-icon">⚙️</span>

          <div>
            <h3>Account Settings</h3>
            <p>Account settings will be added later.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Account;