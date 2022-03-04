import "./App.css";
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";
import CoffeeBeat from "./pages/CoffeeBeat";
import Home from "./pages/Home";
import LofiGirl from "./pages/LofiGirl";
import Coding from "./pages/Coding";
import Relax from "./pages/Relax";
import Oldies from "./pages/Oldies";
import Anime from "./pages/Anime";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Study from "./pages/Study";
import Sleeping from "./pages/Sleeping";
import Gaming from "./pages/Gaming";
import Play from "./components/Play";

function App() {
  const [playMode, setPlayMode] = useState(true);
  const [vol, setVol] = useState("100");
  const [mute, setMute] = useState(false);
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home playMode={playMode} vol={vol} mute={mute} />
          </Route>
          <Route path="/lofigirl">
            <LofiGirl playMode={playMode} vol={vol} mute={mute} />
          </Route>
          <Route path="/coffeebeat">
            <CoffeeBeat playMode={playMode} vol={vol} mute={mute} />
          </Route>
          <Route path="/latenight">
            <Coding playMode={playMode} vol={vol} mute={mute} />
          </Route>
          <Route path="/relax">
            <Relax playMode={playMode} vol={vol} mute={mute} />
          </Route>
          <Route path="/oldies">
            <Oldies playMode={playMode} vol={vol} mute={mute} />
          </Route>
          <Route path="/anime">
            <Anime playMode={playMode} vol={vol} mute={mute} />
          </Route>
          <Route path="/study">
            <Study playMode={playMode} vol={vol} mute={mute} />
          </Route>
          <Route path="/sleeping">
            <Sleeping playMode={playMode} vol={vol} mute={mute} />
          </Route>
          <Route path="/gaming">
            <Gaming playMode={playMode} vol={vol} mute={mute} />
          </Route>
        </Switch>
        <Play setPlayMode={setPlayMode} setVol={setVol} setMute={setMute} />
      </Router>
    </div>
  );
}

export default App;
