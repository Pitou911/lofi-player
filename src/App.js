import "./App.css";
import Sidebar from "./components/Sidebar";
import React from "react";
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

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/lofigirl">
            <LofiGirl />
          </Route>
          <Route path="/coffeebeat">
            <CoffeeBeat />
          </Route>
          <Route path="/latenight">
            <Coding />
          </Route>
          <Route path="/relax">
            <Relax />
          </Route>
          <Route path="/oldies">
            <Oldies />
          </Route>
          <Route path="/anime">
            <Anime />
          </Route>
          <Route path="/study">
            <Study />
          </Route>
          <Route path="/sleeping">
            <Sleeping />
          </Route>
          <Route path="/gaming">
            <Gaming />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
