import React from 'react';
import Movie from './Movie';

export default function MovieList({ handleDeleteMovie, movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie, i) => (
        <Movie handleDeleteMovie={handleDeleteMovie} key={movie + i} movie={movie} />
      ))}
    </div>
  );
}
