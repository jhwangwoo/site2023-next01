import React from "react";
import MovieItem from "./MovieItem";
import styles from "./movie.module.scss";

const MovieCont = ({ movies }) => {
  return (
    <div className={styles.movie__cont + " container mb50"}>
      <ul>
        {movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieCont;
