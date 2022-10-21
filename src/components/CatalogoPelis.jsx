import { MovieCard } from './MovieCard';
import '../styles/CatalogoPelis.css';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../services/movies';
import { Spinner } from './Spinner';
import { useLocation } from 'react-router-dom';
import { useQuery } from  '../hooks/useQuery';

function CatalogoPelis (){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get('search');

    useEffect(()=>{
        setIsLoading(true);
        const searchUrl = search ? `/search/movie?query=${search}` : '/discover/movie';
        getAllMovies(searchUrl).then(data => {
            setMovies(data.results);
            setIsLoading(false);
        });
    },[search]);
    

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