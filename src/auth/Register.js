import React from "react";
import { Col, Form, FormGroup, Input, Navbar, Button, Label } from "reactstrap";
import axios from "axios";
import "../App.css";

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
    const name = document.getElementById("name");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    if (name.value === null || name.value === "") {
      alert("Username can't be empty!");
    }
    if (input1.value !== "" && input2 !== "") {
      if (input1.value === input2.value) {
        return true;
      }
    }
    alert("Passwords don't match");
  };

  register = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://top9-the2nd.herokuapp.com/api/auth/register",
        this.state.newUser
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  render() {
    return (
      <div className="register">
        <Navbar className="landNav">
          <h2>Tops</h2>
          <Button className="landBtn" color="primary" href="/login">
            Login
          </Button>
        </Navbar>

        <div className="regCard">
          <h1>Sign Up</h1>
          <Form className="form" onSubmit={this.register}>
            <Col>
              <FormGroup>
                <Label></Label>
                <Input
                  id="name"
                  type="username"
                  name="username"
                  placeholder="Username"
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

            <Button className="btn" color="primary">
              SUBMIT
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Signup;
