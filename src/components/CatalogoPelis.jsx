import { MovieCard } from './MovieCard';
import '../styles/CatalogoPelis.css';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../services/movies';
import { Spinner } from './Spinner';


function CatalogoPelis (){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true);
        getAllMovies('/discover/movie').then(data => {
            setMovies(data.results);
            setIsLoading(false);
        });
    },[]);
    

    if (isLoading){
        return(
            <Spinner/>
        )
    }
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