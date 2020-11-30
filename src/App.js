import React, { useState } from "react";
import MovieList from "./Components/MovieList/MovieList";
import AddMovieModal from "./Components/AddMovieModal/AddMovieModal";
import "./style.css";
import { Button } from "react-bootstrap";

function App() {
  const [movies, setMovies] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const addSelectedMovies = (moviesData) => {
    setMovies((prev) => [...prev, ...moviesData]);
  };
  return (
    <>
      <div className='sky-gradient sky-gradient-04"'>
        {" "}
        <h1 id='header-text'>ערב סרט עם המתבגרת</h1>{" "}
        <Button
          variant='outline-light'
          onClick={() => setModalShow(true)}
          style={{ marginLeft: "2rem" }}>
          Add Movies
        </Button>
        <AddMovieModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          addSelectedMovies={addSelectedMovies}
        />
        {movies.length > 0 && <MovieList movies={movies} clickable={false} />}
      </div>
    </>
  );
}

export default App;
