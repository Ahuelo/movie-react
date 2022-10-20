import { MovieCard } from './MovieCard';
import '../styles/CatalogoPelis.css';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../services/movies';


function CatalogoPelis (){
    const [movies, setMovies] = useState([]);


    useEffect(()=>{
        getAllMovies('/discover/movie').then(data => {
            setMovies(data.results);
        });
    },[]);

    return(
        <ul className={'movieGrid'}>
            {movies.map(movie =>(
                <MovieCard key={movie.id}
                movie={movie}/>
            ))}
        </ul>
    )
};

export { CatalogoPelis };