import React from 'react';
import { Col, Form, FormGroup, Input, Navbar, Button, Label } from "reactstrap";
import axios from "axios";
import '../App.css'

class Signup extends React.Component {
  state = {
    newUser: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value,
      },
    });
  };

  validate = () => {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    if (input1.value !== "" && input2 !== "") {
      if (input1.value === input2.value) {
        return true;
      }
    }
    alert("Passwords don't match");
    return false;
  };

  register = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://top9-the2nd.herokuapp.com/api/auth/register",
        this.state.newUser
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  render() {
    return (
      <div>
          <Navbar className="landNav">
            <h2>Tops</h2>
            <Button className='landBtn' color="primary" href="/login">Login</Button>
          </Navbar>
       
      
        <div className="register">
          <h1>Sign Up</h1>
          <div className='regCard'>
            <Form className="form" onSubmit={this.register}>
              <Col>
                <FormGroup>
                  <Label></Label>
                  <Input
                    type="username"
                    name="username"
                    placeholder="Usenname"
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label></Label>
                  <Input
                    id="input1"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label></Label>
                  <Input
                    id="input2"
                    type="password"
                    name="password"
                    placeholder="Confrim Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                </FormGroup>
              </Col>

              <Button color="primary">Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
