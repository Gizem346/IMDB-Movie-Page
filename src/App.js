import React, {useEffect, useState} from 'react'

import Movie from './components/Movie';


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=cb6977a5b0b09a5ffebb3f7e45a5e4f7&sort_by=popularity.desc&page=1";


const SEARCH_API ="https://api.themoviedb.org/3/search/movie?api_key=cb6977a5b0b09a5ffebb3f7e45a5e4f7&query="

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
    });

  }, []);


  return ( 
    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) =>
        <Movie key={movie.id} {...movie} />
      )}
    </div>
  );
}

export default App;
