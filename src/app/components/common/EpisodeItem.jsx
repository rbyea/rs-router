import React from "react";
import { useParams } from "react-router-dom";
import episode from "../json/episode.json";

const EpisodeItem = (props) => {
  const { id } = useParams();
  const [episodeItem, setEpisodeItem] = React.useState(null);

  React.useEffect(() => {
    const filtered = episode.filter((el) => el.id === +id);

    setEpisodeItem(filtered);
  }, [id]);

  return (
    <>
      {episodeItem?.map((el) => {
        const date = new Date(el.created);
        return (
          <div key={el.id} className="hero-item">
            <div className="hero-name">{el.name}</div>
            <div className="hero-status">{el.air_date}</div>
            <div className="hero-species">{el.episode}</div>
            <div className="hero-created">{date.toLocaleString()}</div>
          </div>
        );
      })}
    </>
  );
};

export default EpisodeItem;
