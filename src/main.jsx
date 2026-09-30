// React is imported because this file uses JSX.
// StrictMode helps React detect potential problems during development.
import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";

// Import our global CSS
import "./index.css";

// Import the main App component
import App from "./App.jsx";

// Find the HTML element with id="root"
// and render our React application inside it.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);