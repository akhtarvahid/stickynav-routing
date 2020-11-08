import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/menu1">Menu 1</NavLink>
        </li>
        <li>
          <NavLink to="/menu2">Menu 2</NavLink>
        </li>
        <li>
          <NavLink to="/menu3">Menu 3</NavLink>
        </li>
        <li>
          <NavLink to="/menu4">Menu 4</NavLink>
        </li>
      </ul>
    </nav>
  );
}
