import React from "react";

const Player = ({ file, playNext }) => {
  if (!file || (typeof file === "object" && !Object.keys(file).length)) {
    return null;
  }

  return (
    <div>
      <audio controls src={file.data} onEnded={playNext} />
    </div>
  );
};

export default Player;
