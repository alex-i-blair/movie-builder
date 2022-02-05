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
      <input
        onChange={(e) => setMovieFormTitle(e.target.value)}
        required
        placeholder="Title"
        value={movieFormTitle}
      ></input>
      <input
        onChange={(e) => setMovieFormYear(e.target.value)}
        required
        placeholder="Year"
        value={movieFormYear}
      ></input>
      <input
        onChange={(e) => setMovieFormDirector(e.target.value)}
        placeholder="Director"
        required
        value={movieFormDirector}
      ></input>
      <select onChange={(e) => setMovieFormColor(e.target.value)} required value={movieFormColor}>
        <option value="lightgreen">Green</option>
        <option value="lightblue">Blue</option>
        <option value="pink">Pink</option>
        <option value="purple">Purple</option>
        <option value="orange">Orange</option>
      </select>
      <button>Add Movie</button>
    </form>
  );
}
