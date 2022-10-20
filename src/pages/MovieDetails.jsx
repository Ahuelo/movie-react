import movie  from './movie.json';
import '../styles/MovieDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../services/movies';

function MovieDetails () {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    
    useEffect(()=>{
        getAllMovies(`/movie/${movieId}`).then(data =>{
            setMovie(data);
        })
    }, [movieId]);

    if (!movie){
        return null;
    }

    const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return(
        <div className={'detailsContainer'}>
            <img className={'col movieImage'} src={imageURL} alt={movie.title} />
            <div className={'col movieDetails'}>
                <p className={'firstItem'}> <strong>Title:</strong> {movie.title}</p>
                <p>
                    <strong>Genres: </strong>{movie.genres.map(genre =>genre.name).join(', ')}
                </p>
                <p><strong>Overview:</strong> {movie.overview}</p>
            </div>
        </div>
    )
};

export { MovieDetails };