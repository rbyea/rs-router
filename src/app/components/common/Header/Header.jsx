import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header-navbar">
      <Link to="/">Главная</Link>
      <Link to="/heros">Герои</Link>
      <Link to="/location">Локации</Link>
      <Link to="/episode">Эпизоды</Link>
    </header>
  );
};

export default Header;
