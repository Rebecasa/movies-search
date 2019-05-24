import React from 'react';
import Movie from './movie';


const MovieList = (props) => {
  if (props.movies === undefined) {
    return (
      <p hidde={'true'}>Nothing to show</p>
    );
  }
  return (
    <ul className="movie-list">
      {props.movies.map(movie => <Movie movie={movie} id={movie.id} key={movie.id} />)}
    </ul>
  );
};
export default MovieList;
