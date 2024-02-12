import React from "react";
import episode from "../json/episode.json";
import { Link } from "react-router-dom";

const Episode = (props) => {
  return (
    <div className="hero-wrapper">
      {episode?.map((el) => (
        <div key={el.id} className="hero-width">
          <div className="hero-item">
            <div className="hero-name">
              <Link to={`/episode/${el.id}`}>{el.name}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Episode;
