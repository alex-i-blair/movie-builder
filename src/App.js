import './App.css';
import MovieForm from './MovieForm';
import { useState } from 'react';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  return (
    <div className="App">
      <section className="current-movie-section">
        <div className="current-move-display"></div>
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
        />
      </section>
    </div>
  );
}

export default App;
