import React from 'react';

export default function Movie({ movie }) {
  return (
    <div className="current-movie-display" style={{ backgroundColor: movie.color }}>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <p>Directed by {movie.director}</p>
    </div>
  );
}
