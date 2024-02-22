import React, { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer"; // Import AudioPlayer component
import { useLocalStorage } from "react-use";
import "./Playlist.css";

const Playlist = ({ playlist }) => {
  const [currentIndex, setCurrentIndex] = useLocalStorage("currentIndex", 0); // Use useLocalStorage hook
  const [selectedFile, setSelectedFile] = useState(
    playlist[currentIndex] || null
  );

  useEffect(() => {
    // Update selectedFile when playlist changes
    setSelectedFile(playlist[currentIndex] || null);
  }, [playlist, currentIndex]);

  const handleSelect = (index) => {
    setSelectedFile(playlist[index]);
    setCurrentIndex(index); // Update current index on selection
  };

  const handlePlayNext = () => {
    const currentFileIdx = playlist.findIndex(
      (f) => f.name === selectedFile.name
    );

    const nextIndex = (currentFileIdx + 1) % playlist.length;
    setSelectedFile(playlist[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  return (
    <div>
      {playlist.length > 0 && (
        <div>
          {playlist.map((file, index) => (
            <p
              className={`${
                selectedFile.name === file.name ? "selectedSongItem" : ""
              } songItem`}
              key={index}
              onClick={() => handleSelect(index)}
            >
              {file.name} ({file.size} bytes)
            </p>
          ))}
        </div>
      )}
      {selectedFile && (
        <div style={{ color: "green" }}>
          <h3>Now playing: {selectedFile.name}</h3>
          <AudioPlayer file={selectedFile} playNext={handlePlayNext} />
        </div>
      )}
    </div>
  );
};

export default Playlist;