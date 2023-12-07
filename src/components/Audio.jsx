import React from "react";
import useSound from "use-sound";

const Audio = ({ audio }) => {
  const [play, { stop }] = useSound(audio);
  return (
    <div>
      <button onClick={() => play()}>
        <span role="img" aria-label="nota">
          🎵 Play
        </span>
      </button>
      <button onClick={() => stop()}>
        <span role="img" aria-label="stop">
          🛑 Stop
        </span>
      </button>
    </div>
  );
};

export default Audio;
