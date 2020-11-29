import axios from "axios";
import React from "react";
import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class AddMovieForm extends React.Component {
  state = { movieName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://www.omdbapi.com/?s=${this.state.movieName}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ movieName: "" });
  };
  render() {
    return (
      <Container style={{ width: "50%" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Search For Movie'
              value={this.state.movieName}
              onChange={(event) =>
                this.setState({ movieName: event.target.value })
              }
              required
            />
          </Form.Group>
          <Button variant='success' type='submit' block>
            Search
          </Button>
        </Form>
      </Container>
    );
  }
}
export default AddMovieForm;
