import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Create from "./components/Create/Create";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/videogames" component={Home} />
      <Route path="/details/:id" component={Details} />
      <Route path="/create" component={Create} />
    </div>
  );
}

export default App;
