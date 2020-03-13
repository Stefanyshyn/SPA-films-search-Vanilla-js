import ModelMovie from '../../../models/movie';
import ModelGenre from '../../../models/genre';

const prepareMovieBeforeAppendToContainer = async (_movie)=>{
    let movie = _movie;

    movie = await ModelGenre.addGenreName(movie);
    movie = await ModelMovie.addRecomendationsToMovie(movie)

    return movie;
}

export default prepareMovieBeforeAppendToContainer;