import React from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import { axiosWithAuth } from "./auth/axiosWithAuth";
import Home from "./components/Home";
import AddMovies from "./components/AddMovies";
import Edit from "./components/Edit";
import Land from "./components/Land";
import RequireAuth from "./auth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" component={Land} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/home" component={Home} />
        <Route path="/movie" component={AddMovies} />
        <Route path="/edit" component={Edit} />
      </Routes>
    </div>
  );
}

export default App;
