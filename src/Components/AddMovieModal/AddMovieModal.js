import { Modal, Button } from "react-bootstrap";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import MovieList from "../MovieList/MovieList";
import { React, useState } from "react";

function AddMovieModal(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelected] = useState([]);

  const addNewMovie = (moviesData) => {
    console.log("Modal");
    console.log(moviesData.Search);
    moviesData.Search.map((movie) => setMovies((movies) => [...movies, movie]));
  };

  const handleRemove = (id) => {
    var array = [...this.state.movies.filter((movie) => movie.imdbID !== id)]; // make a separate copy of the array
    console.log(array);
    this.setState({ movies: array });
  };

  const handleClick = (movie) => {
    console.log("modal");
    console.log(movie);
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
    props.onHide();
  };

  const handleCloseNSave = () => {
    props.addmovies(selectedMovies);
    clearState();
  };
  const handleCancel = () => {
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
            handleRemove={handleRemove}
            movies={movies}
            handleClick={handleClick}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseNSave}>Add</Button>
        <Button variant='light' onClick={handleCancel}>
          cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddMovieModal;
