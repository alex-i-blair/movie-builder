import React from 'react';

export default function Movie(props) {
  return (
    <div
      onClick={() => props.handleDeleteMovie && props.handleDeleteMovie(props.movie.id)}
      className="movie-display"
      style={{ backgroundColor: props.movie.color }}
    >
      <h3>{props.movie.title}</h3>
      <p>{props.movie.year}</p>
      <p>Directed by {props.movie.director}</p>
    </div>
  );
}
