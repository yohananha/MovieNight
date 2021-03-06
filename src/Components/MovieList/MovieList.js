import Movie from "../MovieData/MovieData";
import { CardColumns } from "react-bootstrap";

const MovieList = (props) => {
  const handleClick = (movie) => {
    if (props.clickable) props.handleClick(movie);
  };

  return (
    <CardColumns
      className='movie-list justify-content-center'
      style={{
        margin: "auto",
        width: "100%",
        justifyItems: "center",
        alignItems: "center",
      }}>
      {props.movies.map((movie) => (
        <Movie
          clickable={props.clickable}
          key={movie.imdbID}
          handleClick={() => handleClick(movie)}
          {...movie}
        />
      ))}
    </CardColumns>
  );
};
export default MovieList;
