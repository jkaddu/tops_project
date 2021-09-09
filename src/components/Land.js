import React from "react";
import './components.css';
import { Button, Navbar } from 'reactstrap';

const Land = () => {
  return (
    <div className="land">
      <Navbar className="landNav">
        <h2>Tops</h2>  
        <Button className="landBtn" color="primary" href="/login">Login</Button> 
      </Navbar> 
      <div className='landCard'>
        <h2>Tops</h2>
        <p>
          Find it hard to remember your favorite movies? Don't
          worry...here's a way to remmber!
        </p>     
        <p> 
          <Button color="primary" className="register-button" href="/register">Sign Up</Button>  
        </p> 
      </div>
    </div>
  );
};

export default Land;
