import React from "react";
import { useParams } from "react-router-dom";
import location from "../json/location.json";

const LocationItem = (props) => {
  const { id } = useParams();
  const [locationArray, setLocationArray] = React.useState(null);

  React.useEffect(() => {
    const filtered = location.filter((el) => el.id === +id);

    setLocationArray(filtered);
  }, [id]);
  return (
    <>
      {locationArray?.map((el) => {
        const date = new Date(el.created);
        return (
          <div key={el.id} className="hero-item">
            <div className="hero-name">{el.name}</div>
            <div className="hero-species">{el.species}</div>
            {el.type && <div className="hero-type">{el.type}</div>}
            <div className="hero-gender">{el.dimension}</div>
            <div className="hero-created">{date.toLocaleString()}</div>
          </div>
        );
      })}
    </>
  );
};

export default LocationItem;
