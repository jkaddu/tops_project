import React from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./components/Home";
import AddMovies from "./components/AddMovies";
import Edit from "./components/Edit";
import Land from "./components/Land";
import Layout from "./components/Layout";
import RequireAuth from "./auth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="/" Component={Land} />
          <Route path="login" Component={Login} />
          <Route path="register" Component={Register} />

          <Route path="home" Component={Home} />
          <Route path="movie" Component={AddMovies} />
          <Route path="edit" Component={Edit} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
