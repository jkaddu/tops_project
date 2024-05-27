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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: 1,
          name: "",
        },
      ],
    };
  }

  componentDidMount() {
    const endpoint = "https://glitch.com/edit/#!/tops-movie-favs/users";
    axios
      .get(endpoint, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        this.setState({
          movies: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" component={Land} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <Route path="/home" component={Home} />
          <Route path="/movie" component={AddMovies} />
          <Route path="/edit" component={Edit} />
        </Routes>
      </div>
    );
  }
}

export default App;
