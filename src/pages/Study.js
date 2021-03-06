import React from "react";
import ReactPlayer from "react-player";
function Study({ playMode, vol, mute }) {
  const myStyle = {
    backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/9afe0493484903.5e66500f8dea4.gif)`,
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
      <div className="studyPage" style={myStyle}></div>
      <ReactPlayer
        url="https://youtu.be/FjHGZj2IjBk"
        playing={playMode}
        width="0"
        height="0"
        volume={vol / 100}
        muted={mute}
      />
    </>
  );
}

export default Study;
