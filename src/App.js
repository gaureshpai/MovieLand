import { useEffect, useState } from 'react'; 
import React from 'react';
import './index.css'
import SearchIcon from './search.svg'
import MovieCard from './components/MovieCard';
//62b21a52

const API_URL = " http://www.omdbapi.com?apikey=62b21a52";
 
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchterm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies("new movies");
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className='search'>
                <input 
                    type='text' 
                    placeholder='Search for movies...' 
                    value={searchterm} 
                    onChange={(e) => {setSearchTerm(e.target.value)}} 
                />
                <img 
                    src={SearchIcon} 
                    alt='Search' 
                    onClick={() => { searchMovies(searchterm) }} 
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} searchMovies={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
};

export default App;