import React, { useState } from "react";
import MovieList from "./Components/MovieList/MovieList";
import AddMovieModal from "./Components/AddMovieModal/AddMovieModal";
import "./style.css";
import { Jumbotron, Button } from "react-bootstrap";

function App() {
  const [movies, setMovies] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const addSelectedMovies = (moviesData) => {
    console.log("APP");
    console.log(moviesData);
    setMovies((prev) => [...prev, ...moviesData]);
    console.log(movies);
  };
  return (
    <>
      <Jumbotron id='banner'>
        <h1 id='header-text' style={{ textAlign: "center" }}>
          ערב סרט עם המתבגרת
        </h1>
        <Button variant='primary' onClick={() => setModalShow(true)}>
          Add Movies
        </Button>

        <AddMovieModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          addSelectedMovies={addSelectedMovies}
        />
      </Jumbotron>
      {movies.length > 0 && <MovieList movies={movies} clickable={false} />}
    </>
  );
}

export default App;
