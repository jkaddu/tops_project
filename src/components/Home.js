import React from "react";
import { Button } from "reactstrap";
import topGun from "../images/Top_Gun_Maverick_Poster.jpg";
import tday from "../images/Training_Day_Poster.jpg";
import scary from "../images/Movie_poster_for__Scary_Movie_ .jpg";
import long from "../images/Longest_yard_ver2.jpg";
import titans from "../images/Remember_the_titansposter.jpg";
import nights from "../images/Friday_night_lights_ver2.jpg";
import happy from "../images/Happygilmoreposter.jpg";
import gone from "../images/Gone_in_sixty_seconds.jpg";
import avatar from "../images/Avatar_(2009_film)_poster.jpg";

const moviesData = [
  {
    name: "Top Gun",
    image: topGun,
    id: 1,
  },
  {
    name: "Scary Movie",
    image: scary,
    id: 2,
  },
  {
    name: "Avatar",
    image: avatar,
    id: 3,
  },
  {
    name: "Longest Yard",
    image: long,
    id: 4,
  },
  {
    name: "Training Day",
    image: tday,
    id: 5,
  },
  {
    name: "Remeber the Titans",
    image: titans,
    id: 6,
  },
  {
    name: "Fiday Night Lights",
    image: nights,
    id: 7,
  },
  {
    name: "Happy Gilmore",
    image: happy,
    id: 8,
  },
  {
    name: "Gone in 60 seconds",
    image: gone,
    id: 9,
  },
];

const Home = () => {
  const movies = moviesData;
  return (
    <div className="home">
      <nav className="landNav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="navIcon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
          />
        </svg>

        <button className="navBtn">
          <a href="/login">Sign out</a>
        </button>
      </nav>

      <div className="homePage">
        <h2 className="title">Welcome to your DASHBOARD!</h2>
        <h3 className="title3">My Movies</h3>
        <div className="moviesCont">
          {movies.map((movie) => (
            <MovieCard movieObj={movie} key={movie.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

function MovieCard({ movieObj }) {
  function handleDelete() {
    console.log("Deleted");
  }
  return (
    <div className="movie-card">
      <h3>{movieObj.name}</h3>

      <img className="movieImage" src={movieObj.image} alt={movieObj.name} />
      <p className="edit-delete">
        <Button color="primary" className="hmbtn" href={`/edit/${movieObj.id}`}>
          Edit
        </Button>
        <Button color="danger" className="hmbtn" onClick={handleDelete}>
          Delete
        </Button>
      </p>
    </div>
  );
}

export default Home;
