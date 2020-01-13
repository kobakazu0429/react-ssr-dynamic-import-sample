import React, { FC } from "react";
import { Link } from "react-router-dom";

const Nav: FC = () => (
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
