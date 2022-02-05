import './App.css';
import MovieForm from './MovieForm';
import { useState } from 'react';
import Movie from './Movie';
import MovieList from './MovieList';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showFilterInput, setShowFilterInput] = useState(false);
  function handleDeleteMovie(id) {
    const index = allMovies.findIndex((movie) => movie.id === id);
    allMovies.splice(index, 1);
    setAllMovies([...allMovies]);
  }

  function handleFilteredMovies(query) {
    const filteredMovies = allMovies.filter((movie) => movie.title.includes(query));
    setFilteredMovies(filteredMovies);
  }

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
    setShowFilterInput(true);
    setAllMovies(updatedMovies);
  }

  return (
    <>
      <header>Movie List:</header>
      <div className="App">
        <section className="current-movie-section">
          {movieFormTitle && (
            <Movie
              movie={{
                color: movieFormColor,
                director: movieFormDirector,
                title: movieFormTitle,
                year: movieFormYear,
              }}
            />
          )}
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
        <section className="display-movies">
          <MovieList
            movies={filteredMovies.length ? filteredMovies : allMovies}
            handleDeleteMovie={handleDeleteMovie}
          />
          {showFilterInput && (
            <div className="movie-filter">
              <input
                onChange={(e) => handleFilteredMovies(e.target.value)}
                placeholder="Filter Movies"
              />
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
