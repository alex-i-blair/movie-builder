export default function MovieForm({
  movieFormColor,
  setMovieFormColor,
  movieFormDirector,
  setMovieFormDirector,
  movieFormTitle,
  setMovieFormTitle,
  movieFormYear,
  setMovieFormYear,
  submitMovie,
}) {
  return (
    <form onSubmit={submitMovie} className="movie-form">
      <label>
        Title
        <input
          onChange={(e) => setMovieFormTitle(e.target.value)}
          required
          value={movieFormTitle}
        ></input>
      </label>
      <label>
        Year
        <input
          onChange={(e) => setMovieFormYear(e.target.value)}
          required
          value={movieFormYear}
        ></input>
      </label>
      <label>
        Director
        <input
          onChange={(e) => setMovieFormDirector(e.target.value)}
          required
          value={movieFormDirector}
        ></input>
      </label>
      <label htmlFor="">
        Color
        <select onChange={(e) => setMovieFormColor(e.target.value)} required value={movieFormColor}>
          <option value="lightgreen">Green</option>
          <option value="lightblue">Blue</option>
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
        </select>
      </label>
    </form>
  );
}
