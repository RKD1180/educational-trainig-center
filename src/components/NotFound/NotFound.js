import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>This Page Is Not Found</h2>
      <Link to="/home"></Link>
    </div>
  );
};

export default NotFound;
