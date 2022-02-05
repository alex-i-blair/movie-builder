import './App.css';
import MovieForm from './MovieForm';
import { useState } from 'react';
import Movie from './Movie';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  function submitMovie(e) {
    e.preventDefault();
    const newMovie = {
      title: movieFormTitle,
      director: movieFormDirector,
      year: movieFormYear,
      color: movieFormColor,
      id: Math.random(),
    };
    const updatedMovies = [...allMovies, newMovie];
    setAllMovies(updatedMovies);
  }

  return (
    <div className="App">
      <section className="current-movie-section">
        <div className="current-movie-display" style={{ backgroundColor: movieFormColor }}>
          <h3>{movieFormTitle}</h3>
          <p>{movieFormYear}</p>
          <p>Directed by {movieFormDirector}</p>
        </div>
        <MovieForm
          allMovies={allMovies}
          setAllMovies={setAllMovies}
          movieFormColor={movieFormColor}
          setMovieFormColor={setMovieFormColor}
          movieFormDirector={movieFormDirector}
          setMovieFormDirector={setMovieFormDirector}
          movieFormTitle={movieFormTitle}
          setMovieFormTitle={setMovieFormTitle}
          movieFormYear={movieFormYear}
          setMovieFormYear={setMovieFormYear}
          submitMovie={submitMovie}
        />
      </section>
    </div>
  );
}

export default App;
