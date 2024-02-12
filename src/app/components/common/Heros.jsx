import React from "react";
import characters from "../json/characters.json";
import { Link } from "react-router-dom";

const Heros = (props) => {
  return (
    <div className="hero-wrapper">
      {characters?.map((el) => (
        <div key={el.id} className="hero-width">
          <div className="hero-item">
            <img src={el.image} alt={el.name} />
            <div className="hero-name">
              <Link to={`/heros/${el.id}`}>{el.name}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Heros;
