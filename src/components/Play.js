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
  var play = document.querySelector(".play");

  const [playing, setPlaying] = useState(`play active`);
  const [pausing, setPausing] = useState(`pause`);
  let playHandler = () => {
    if (play.classList.contains("active")) {
      setPlaying("play");
      setPausing(`pause active`);
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
    <div class="container">
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
