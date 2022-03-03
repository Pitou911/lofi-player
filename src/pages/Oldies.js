import React from "react";
import ReactPlayer from "react-player";
function Oldies() {
  const myStyle = {
    backgroundImage: `url(https://i.imgur.com/ugd1GkO.gif)`,
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
      <div className="oldiesPage" style={myStyle}></div>
      <ReactPlayer
        url="https://youtu.be/UxjPuxBVZ_Y"
        playing={true}
        width="0"
        height="0"
        volume={0.5}
      />
    </>
  );
}

export default Oldies;
