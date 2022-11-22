import { MovieCard } from './MovieCard';
import '../styles/CatalogoPelis.css';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../services/movies';
import { Spinner } from './Spinner';
import { useQuery } from  '../hooks/useQuery';
import { v4 as uuidv4 } from 'uuid';
import InfiniteScroll from 'react-infinite-scroll-component';

function CatalogoPelis (){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    //se usa este hook para que no cargue indefinidamente en busquedas
    const [hasMore, setHasMore] = useState(true);

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
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
        });
        //se establece de acuerdo el page al use state del mismo
    },[search, page]);
    


    return(
        //Esta librería requiere minimo 3 valores
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            //se establece que se requiere con base en el useState
            next={()=>setPage((prevePage) => prevePage + 1)}
            loader ={<Spinner/>}
        >
            <ul className={'movieGrid'}>
                {movies.map(movie =>(
                    <MovieCard key={uuidv4()/* movie.id */}
                    movie={movie}/>
                ))}
            </ul>
        </InfiniteScroll>
    )
};

export { CatalogoPelis };