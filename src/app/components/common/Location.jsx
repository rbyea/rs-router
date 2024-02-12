import React from "react";
import location from "../json/location.json";
import { Link } from "react-router-dom";

const Location = (props) => {
  return (
    <div className="hero-wrapper">
      {location?.map((el) => (
        <div key={el.id} className="hero-width">
          <div className="hero-item">
            <div className="hero-name"><Link to={`/location/${el.id}`}>{el.name}</Link></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Location;
