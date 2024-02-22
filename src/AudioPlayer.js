import React from "react";

const Player = ({ file, playNext }) => {
  if (!file || (typeof file === "object" && !Object.keys(file).length)) {
    return null; // Handle no file selected
  }

  return (
    <div>
      <audio controls src={file.data} onEnded={playNext} autoPlay />
    </div>
  );
};

export default Player;
