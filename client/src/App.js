import React from "react";
import { Route, Routes } from "react-router-dom";
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
// import { ProtectedRoute } from "./components/ProtectedRoute.js";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/videogames" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          {/* <ProtectedRoute> */}
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          {/* </ProtectedRoute> */}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
