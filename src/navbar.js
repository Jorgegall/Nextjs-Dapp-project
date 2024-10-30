import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/page1">Página 1</Link></li>
        <li><Link to="/page2">Página 2</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
