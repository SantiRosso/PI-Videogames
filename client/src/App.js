import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

//components
import LandingPage from "./components/LandingPage/LandingPage";
import Create from "./components/Create/Create";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import About from "./components/About/About";
import Edit from "./components/Edit/Edit";

//firebase
import { AuthProvider } from "./components/context/authContext.js";
// import { PortectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Route exact path="/" component={LandingPage} />
        <Route path="/videogames" component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route path="/about" component={About} />
        {/* <PortectedRoute> */}
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
        {/* </PortectedRoute> */}
      </AuthProvider>
    </div>
  );
}

export default App;
