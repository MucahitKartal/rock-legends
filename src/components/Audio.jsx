import React from "react";
import useSound from "use-sound";

const Audio = ({ audio }) => {
  const [play, { stop }] = useSound(audio);

  const handlePlay = (e) => {
    e.stopPropagation();
    play();
  };

  const handleStop = (e) => {
    e.stopPropagation();
    stop();
  };
  return (
    <div>
      <button onClick={handlePlay}>
        <span role="img" aria-label="nota">
          🎵 Play
        </span>
      </button>
      <button onClick={handleStop}>
        <span role="img" aria-label="stop">
          🛑 Stop
        </span>
      </button>
    </div>
  );
};

export default Audio;
