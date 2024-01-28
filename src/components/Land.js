import React from "react";
import "./components.css";
import { Button, Navbar } from "reactstrap";

const Land = () => {
  return (
    <div className="land">
      <Navbar className="landNav">
        <h2>Tops</h2>
        <Button className="landBtn" color="primary" href="/login">
          Login
        </Button>
      </Navbar>
      <div className="landCard">
        <h2>Tops</h2>
        <p>
          Hello and welcome to TOPS! The place to save your favorties. Sort by
          whatever category you'd like. Whether that be genre, era or artist.
          The possibilities are endless.
        </p>
        <p>
          <Button color="primary" className="register-button" href="/register">
            Sign Up
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Land;
