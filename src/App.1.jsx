import { useEffect, useState } from "react";
import {
  NavBar,
  Logo,
  Search,
  NumResults,
  Main,
  Box,
  Loader,
  MovieList,
  ErrorMessage,
  WatchedSummary,
  WatchedMoviesList,
} from "./App";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(function () {
    async function fetchUrl() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://www.omdbapi.com/?apikey=16da2645&s=interstellar"
        );
        if (!res.ok)
          throw new Error("Something Went Wrong while Fetching movies");
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Movie  not Found");
        }
        setMovies(data.Search);
        console.log(data.Search);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUrl();
  }, []);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        {/* <Box element={<MovieList movies={movies} />} />
            <Box
              element={
                <>
                  <WatchedSummary watched={watched} />
                  <WatchedMoviesList watched={watched} />
                </>
              }
            /> */}
        <Box>
          {/* {isLoading? <Loader/> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
