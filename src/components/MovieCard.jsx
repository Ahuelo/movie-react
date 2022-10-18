import '../styles/MovieCard.css'

function MovieCard ({movie}) {
    const imageURL = 'https://image.tmdb.org/t/p/w300'+ movie.poster_path;
    return (
        <li className={'movieCard'}>
            <img 
                width={230}
                height={345}
                src={imageURL} 
                alt={movie.title}  
                className={'movieImage'}
            />
            <div>{movie.title}</div>
        </li>
    )
};

export { MovieCard };