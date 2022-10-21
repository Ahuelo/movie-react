import movie  from './movie.json';
import '../styles/MovieDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../services/movies';
import { Spinner } from '../components/Spinner';

function MovieDetails () {
    const { movieId } = useParams();
    /* El siguiente useState, hará una carga y avisará que se esta cargando */
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        /* se presenta la carga previa a la carga de la pelicula */
        setIsLoading(true);
        getAllMovies(`/movie/${movieId}`).then(data =>{
        /*cuando vaya a aparecer la pelicula cargada, deberá desapareces el cargando */
            setIsLoading(false);
            setMovie(data);
        })
    }, [movieId]);

    /* aqui hacemos la el codigo que debe aparecer en la carga */
    if (isLoading){
        return (
            <Spinner/>
        )
    }
    
/*     Este codigo se usó para antes de tener el spinner
    if (!movie){
        return null;
    } */

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