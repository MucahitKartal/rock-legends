import React, { useState } from "react";
import Audio from "./Audio";

const PlayerCard = ({ name, img, songs, audio, wiki }) => {
  const [displaySongs, setDisplaySongs] = useState(false);

  return (
    <div className="card" onClick={() => setDisplaySongs(!displaySongs)}>
      {displaySongs ? (
        <ul>
          {songs.map((song, index) => (
            <li key={index} className="songs-list">
              ✨ {song}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <img
            className="stars-images"
            src={img}
            alt=""
            width="900px"
            height="650px"
          />
        </div>
      )}
      <div>
        <a target="blank" href={wiki} className="stars-names">
          {name}
        </a>
        <Audio audio={audio} />
      </div>
    </div>
  );
};

export default PlayerCard;
