import React, { useState } from "react";

function Play({ setPlayMode }) {
  let [playmode, setPlaymode] = useState(false);
  // let [text, setText] = useState("Pause");
  // const changeHandler = () => {
  //   if (play) {
  //     setText("Pause");
  //   } else {
  //     setText("Play");
  //   }
  //   setPlayMode(play);
  //   setPlay(!play);
  // };

  //var pause = document.querySelector(".pause");

  const [playing, setPlaying] = useState(`play active`);
  const [pausing, setPausing] = useState(`pause`);

  const playHandler = () => {
    if (playing === `play active`) {
      setPlaying("play");
      setPausing(`pause active`);
      console.log("hehe");
    } else {
      setPlaying(`play active`);
      setPausing("pause");
    }
    setPlayMode(playmode);
    setPlaymode(!playmode);
  };

  return (
    // <div className="playContainer">
    //   <button className="playButton" onClick={changeHandler}>
    //     {text}
    //   </button>
    // </div>
    <div className="container">
      <div id="app" onClick={playHandler}>
        <div className={pausing}>
          <div className="line line_1"></div>
          <div className="line line_2"></div>
        </div>
        <div className={playing}>
          <div className="line line_1"></div>
          <div className="line line_2"></div>
          <div className="line line_3"></div>
        </div>
      </div>
    </div>
  );
}

export default Play;
