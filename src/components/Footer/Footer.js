import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer bg-primary p-5 mt-5">
      <h2 className="text-white">ProgrammersPoint</h2>
      <div>
        <Link className="text-dark me-3" to="/home">
          Home
        </Link>
        <Link className="text-dark" to="/services">
          Services
        </Link>
      </div>
    </div>
  );
};

export default Footer;
