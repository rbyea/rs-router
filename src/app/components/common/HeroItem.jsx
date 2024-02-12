import React from "react";
import { useParams } from "react-router-dom";
import characters from "../json/characters.json";

const HeroItem = (props) => {
  const { id } = useParams();
  const [characterItem, setCharacterItem] = React.useState(null);

  React.useEffect(() => {
    const filtered = characters.filter((el) => el.id === +id);

    setCharacterItem(filtered);
  }, [id]);

  return (
    <>
      {characterItem?.map((el) => {
        const date = new Date(el.created);
        return (
          <div key={el.id} className="hero-item">
            <img src={el.image} alt={el.name} />
            <div className="hero-name">{el.name}</div>
            <div className="hero-status">{el.status}</div>
            <div className="hero-species">{el.species}</div>
            {el.type && <div className="hero-type">{el.type}</div>}
            <div className="hero-gender">{el.gender}</div>
            <div className="hero-created">{date.toLocaleString()}</div>
          </div>
        );
      })}
    </>
  );
};

export default HeroItem;
