import { Modal, Button } from "react-bootstrap";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import MovieList from "../MovieList/MovieList";
import { React, useState } from "react";

function AddMovieModal(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelected] = useState([]);

  const addNewMovie = (moviesData) => {
    moviesData.Search.map((movie) => setMovies((movies) => [...movies, movie]));
  };

  const handleClick = (movie) => {
    if (selectedMovies.find((movieData) => movieData.imdbID === movie.imdbID))
      setSelected([
        ...selectedMovies.filter(
          (movieData) => movieData.imdbID !== movie.imdbID
        ),
      ]);
    else setSelected([...selectedMovies, movie]);
  };
  const clearState = () => {
    setMovies([]);
    setSelected([]);
    props.onHide(selectedMovies);
  };

  const handleCloseNSave = () => {
    props.addSelectedMovies(selectedMovies);
    setMovies([]);
    setSelected([]);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Search for movies to add
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddMovieForm onSubmit={addNewMovie} />
        {movies.length > 0 && (
          <MovieList
            clickable={true}
            movies={movies}
            handleClick={handleClick}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseNSave}>Add</Button>
        <Button variant='light' onClick={clearState}>
          cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddMovieModal;
