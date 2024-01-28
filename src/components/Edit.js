import React from "react";
import { Col, Form, FormGroup, Input, Navbar, Button } from "reactstrap";

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateItem();
  };
  render() {
    return (
      <div className="editPage">
        <Navbar className="landNav">
          <h2>Tops</h2>
          <Button className="landBtn" color="primary" href="/home">
            Home
          </Button>
        </Navbar>

        <div className="editCard">
          <h3 className="title1">MOVIE NAME</h3>
          <Form className="editForm" onSubmit={this.handleSubmit}>
            <Col>
              <FormGroup>
                <Input
                  type="edit"
                  name="movie"
                  placeholder="movie name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Button className="editBtn" color="primary" type="submit">
              SAVE
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Edit;
