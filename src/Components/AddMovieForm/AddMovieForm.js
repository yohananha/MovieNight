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
    if (resp.data.Response !== "False") {
      this.props.onSubmit(resp.data);
      this.setState({ movieName: "" });
    } else alert(resp.data.Error);
  };
  render() {
    return (
      <Container style={{ width: "50%" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='אנא הכנס את שם הסרט באנגלית'
              value={this.state.movieName}
              style={{ textAlign: "right" }}
              onChange={(event) =>
                this.setState({ movieName: event.target.value })
              }
              required
            />
          </Form.Group>
          <Button variant='success' type='submit' block>
            חיפוש
          </Button>
        </Form>
      </Container>
    );
  }
}
export default AddMovieForm;
