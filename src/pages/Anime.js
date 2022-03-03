import React from "react";
import ReactPlayer from "react-player";
function Anime() {
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
        url="https://youtu.be/GNWLILeztaI"
        playing={true}
        width="0"
        height="0"
        volume={0.5}
      />
    </>
  );
}

export default Anime;
