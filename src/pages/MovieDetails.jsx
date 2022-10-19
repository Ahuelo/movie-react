import movie  from './movie.json';
import '../styles/MovieDetails.css';

function MovieDetails () {
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