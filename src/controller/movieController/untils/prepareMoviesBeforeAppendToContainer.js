import ModelMovie from '../../../models/movie';
import ModelGenre from '../../../models/genre';

const prepareMoviesBeforeAppendToContainer = async (_movies)=>{
    let movies = _movies;
    
    movies = await ModelGenre.addGenreName(movies);
    movies = await ModelMovie.addRecomendationToMovies(movies)

    return movies;
}

export default prepareMoviesBeforeAppendToContainer;