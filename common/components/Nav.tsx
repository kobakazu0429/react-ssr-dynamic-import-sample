import * as React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Top Page</Link>
      </li>

      <li>
        <Link to="/about">About Page</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
