import React from "react";

import { Navbar, Button } from "reactstrap";

const Home = (props) => {
  return (
    <div className="home">
      <Navbar className="landNav">
        <h2>Tops</h2>
        <Button className="landBtn" color="primary" href="/login">
          Sign Out
        </Button>
      </Navbar>

      <div className="homePage">
        <h2 className="title">Welcome to your DASHBOARD!</h2>
        <div className="movieContainer">
          <div className="movie-card">
            <h3>Movies</h3>
            {props.movies &&
              props.movies.map((movie) => {
                return (
                  <div key={movie.id}>
                    <h3>{movie.name}</h3>
                    <div className="edit-delete">
                      {/* <p>{movie.description}</p> */}
                      <Button
                        color="primary"
                        className="hmbtn"
                        href={`/edit/${movie.id}`}
                      >
                        Edit
                      </Button>
                      <Button
                        color="danger"
                        className="hmbtn2"
                        onClick={() => props.delete(movie.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="movie-card">
            <h3>Movies</h3>
            {props.movies &&
              props.movies.map((movie) => {
                return (
                  <div key={movie.id}>
                    <h3>{movie.name}</h3>
                    <div className="edit-delete">
                      {/* <p>{movie.description}</p> */}
                      <Button
                        color="primary"
                        className="hmbtn"
                        href={`/edit/${movie.id}`}
                      >
                        Edit
                      </Button>
                      <Button
                        color="danger"
                        className="hmbtn2"
                        onClick={() => props.delete(movie.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="movie-card">
            <h3>Movies</h3>
            {props.movies &&
              props.movies.map((movie) => {
                return (
                  <div key={movie.id}>
                    <h3>{movie.name}</h3>
                    <div className="edit-delete">
                      {/* <p>{movie.description}</p> */}
                      <Button
                        color="primary"
                        className="hmbtn"
                        href={`/edit/${movie.id}`}
                      >
                        Edit
                      </Button>
                      <Button
                        color="danger"
                        className="hmbtn2"
                        onClick={() => props.delete(movie.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
