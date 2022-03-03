import React from "react";

function Home() {
  const myStyle = {
    backgroundImage: `url(https://media4.giphy.com/media/RMwgs5kZqkRyhF24KK/giphy.gif?cid=ecf05e476ah8locjefm3su0vormzlei82jjsthrhmwrcak7j&rid=giphy.gif&ct=g)`,
    height: `100vh`,
    width: "100vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    filter: `brightness(0.5)`,
    top: "0",
    zIndex: "-3",
  };
  return <div className="homePage" style={myStyle}></div>;
}

export default Home;
