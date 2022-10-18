import movies from '../movies.json';
import { MovieCard } from './MovieCard';

function CatalogoPelis (){
    return(
        <ul>
            {movies.map(movie =>(
                <MovieCard key={movie.id}
                movie={movie}/>
            ))}
        </ul>
    )
};

export { CatalogoPelis };