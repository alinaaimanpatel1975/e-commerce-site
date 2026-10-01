import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found-page">

      <div className="not-found-content">

        <p className="not-found-code">
          404
        </p>

        <h1>Page Not Found</h1>

        <p>
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="back-home-button"
        >
          Back to Shopora
        </Link>

      </div>

    </main>
  );
}

export default NotFound;