import React, { Component } from 'react';
import Header from './../components/Header';
import { Form, Button } from 'react-bootstrap';
import './NewBeer.css';
import axios from 'axios';
import { saveBeer } from './../services/beer';

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addBeer = this.addBeer.bind(this);
  }

  handleChange(event) {
    const inputName = event.target.name;
    const value = event.target.value;
    this.setState({
      [inputName]: value
    });
    console.log(this.state);
  }

  addBeer(event) {
    event.preventDefault();

    const newBeer = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by
    };

    saveBeer(newBeer)
      .then(result => console.log('beer was created'))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Form className="form-create-beer" action="/new" method="POST" onSubmit={this.addBeer}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tagline</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tagline"
              name="tagline"
              value={this.state.tagline}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>First Brewed</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Brewed"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Brewers Tips</Form.Label>
            <Form.Control
              type="text"
              placeholder="Brewers Tips"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Attenuation Level</Form.Label>
            <Form.Control
              type="text"
              placeholder="Attenuation Level"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contributed By</Form.Label>
            <Form.Control
              type="text"
              placeholder="Contributed By"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add New
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewBeer;
