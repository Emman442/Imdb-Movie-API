import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StarRating from "./StarRating.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating  messages = {["Terrible", "bad", "Okay", "good ", "Amazing"]}/> */}
    {/* <StarRating  size='28' color='crimson' className="test" defaultRating = "3"/> */}
  </React.StrictMode>
);
