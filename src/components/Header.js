import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1> This is the Header</h1>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/page1">Page1 </Link>
        </li>
        <li>
          <Link to="/page2">Page2 </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
