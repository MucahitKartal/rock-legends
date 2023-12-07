import React, { useState } from "react";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const filteredFunc = (player) => {
    const inputValue = value
      .trim()
      .replace(/[^a-z]/gi, "")
      .toLowerCase();
    if (player.name.toLowerCase().includes(inputValue)) {
      return player;
    }
  };
  return (
    <div className="container">
      <div>
        <input
          type="search"
          placeholder="search"
          onChange={handleChange}
          className="form-control"
        />
      </div>

      {value ? (
        <div>
          {data.filter(filteredFunc).map(({ name, img, songs, audio }) => (
            <PlayerCard
              key={name}
              name={name}
              img={img}
              songs={songs}
              audio={audio}
            />
          ))}
        </div>
      ) : (
        <div>
          {data.map(({ name, img, songs, audio }) => (
            <PlayerCard
              key={name}
              name={name}
              img={img}
              songs={songs}
              audio={audio}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardContainer;
