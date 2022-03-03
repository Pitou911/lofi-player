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
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/lofigirl">
            <LofiGirl playMode={playMode} />
          </Route>
          <Route path="/coffeebeat">
            <CoffeeBeat playMode={playMode} />
          </Route>
          <Route path="/latenight">
            <Coding playMode={playMode} />
          </Route>
          <Route path="/relax">
            <Relax playMode={playMode} />
          </Route>
          <Route path="/oldies">
            <Oldies playMode={playMode} />
          </Route>
          <Route path="/anime">
            <Anime playMode={playMode} />
          </Route>
          <Route path="/study">
            <Study playMode={playMode} />
          </Route>
          <Route path="/sleeping">
            <Sleeping playMode={playMode} />
          </Route>
          <Route path="/gaming">
            <Gaming playMode={playMode} />
          </Route>
        </Switch>
        <Play setPlayMode={setPlayMode} />
      </Router>
    </div>
  );
}

export default App;
