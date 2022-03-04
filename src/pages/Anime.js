import React from "react";
import ReactPlayer from "react-player";
function Anime({ playMode, vol, mute }) {
  const myStyle = {
    backgroundImage: `url(https://wallpaperaccess.com/full/869910.gif)`,
    height: `100vh`,
    width: "100vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    filter: `brightness(0.5)`,
    top: "0",
    zIndex: "-3",
  };
  return (
    <>
      <div className="animePage" style={myStyle}></div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=WDXPJWIgX-o"
        playing={playMode}
        width="0"
        height="0"
        volume={vol / 100}
        muted={mute}
      />
    </>
  );
}

export default Anime;
