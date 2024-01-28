import React from "react";
import axios from "axios";
import { Col, Form, FormGroup, Input, Navbar, Button, Label } from "reactstrap";
import "../App.css";

class Login extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
    },
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("https://top9-the2nd.herokuapp.com/api/auth/login", this.state.user)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/home");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Credentials");
      });
  };

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <Navbar className="landNav">
          <h2>Tops</h2>
          <Button className="landBtn" color="primary" href="/register">
            Sign Up
          </Button>
        </Navbar>

        <div className="loginCont">
          <div className="loginCard">
            <h2>Login</h2>
            <Form className="form" onSubmit={this.login}>
              <Col>
                <FormGroup>
                  <Label></Label>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.user.username}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label></Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.user.password}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>

              <Button color="primary" type="submit">
                LOGIN
              </Button>
            </Form>
            <a href="/register" className="create">
              Create an account
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
