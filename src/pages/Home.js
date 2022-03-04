import React from "react";
import ReactPlayer from "react-player";
//import homegif from "./../assets/intro.gif";
function Home({ playMode }) {
  const myStyle = {
    backgroundImage: `url(https://cdnb.artstation.com/p/assets/images/images/035/834/987/original/jordan-pak-lofi.gif?1616014770)`,
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
      <div className="homePage" style={myStyle}></div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=q76bMs-NwRk&t=2111s"
        playing={playMode}
        width="0"
        height="0"
        volume={0.5}
      />
    </>
  );
}

export default Home;
