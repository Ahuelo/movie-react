import movies from '../movies.json';
import { MovieCard } from './MovieCard';
import '../styles/CatalogoPelis.css';

function CatalogoPelis (){
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