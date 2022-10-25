import { MovieCard } from './MovieCard';
import '../styles/CatalogoPelis.css';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../services/movies';
import { Spinner } from './Spinner';
import { useQuery } from  '../hooks/useQuery';
import InfiniteScroll from 'react-infinite-scroll-component';

function CatalogoPelis (){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    const query = useQuery();
    const search = query.get('search');

    useEffect(()=>{
        setIsLoading(true);
        const searchUrl = search 
            ? `/search/movie?query=${search}&page=${page}` 
            : `/discover/movie?page=${page}`;
        getAllMovies(searchUrl).then(data => {
            //el preveMovies es una function creada para sólo esta 
            //parte del codigo y añadir las peliculas a las ya cargadas
            setMovies(prevMovies => prevMovies.concat(data.results));
            setIsLoading(false);
        });
        //se establece de acuerdo el page al use state del mismo
    },[search, page]);
    


    return(
        //Esta librería requiere minimo 3 valores
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={true}
            //se establece que se requiere con base en el useState
            next={()=>setPage((prevePage) => prevePage + 1)}
            loader ={<Spinner/>}
        >
            <ul className={'movieGrid'}>
                {movies.map(movie =>(
                    <MovieCard key={movie.id}
                    movie={movie}/>
                ))}
            </ul>
        </InfiniteScroll>
    )
};

export { CatalogoPelis };