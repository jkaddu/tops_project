import React from "react";

import { Form, FormGroup, Input, Col, Navbar, Button } from "reactstrap";

class AddMovie extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

  handleChanges = (e) =>  {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.inputValue)
    this.props.addMovie(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <div className="addMovie">
        <Navbar className="landNav">
          <h2>Tops</h2>
          <Button className='landBtn' color="primary" href="/home">Home</Button>
        </Navbar>
       
        <div className="addCard">
          <Form className="formMovie" onSubmit={this.handleSubmit}>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  name="movie"
                  placeholder='Name Movie'
                  value={this.state.inputValue}
                  onChange={this.handleChanges}
                  />
              </FormGroup>
            </Col>
            <Button color="primary">Add</Button>
          </Form>
        </div>
      </div>
    );
  }
  }

export default AddMovie;

