function ListOfMovies ({ movies }) {
    return(        
        <ul className="movies">
            {
                movies.map(movie => (
                    <li className="movie" key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.image} alt={movie.title}/>
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResults () {
    return(
        <p>No se encontraron películas para esta búsqueda</p>
    )
}

export function Movies ({ movies }) {
   
    const hasMovies = movies?.lenght > 0 //no tiene peliculas

    return (
        hasMovies
          ? <ListOfMovies movies={movies} />
          : <NoMoviesResults />
    )
}
