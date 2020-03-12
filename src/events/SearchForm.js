import toHTML from "../untils/convert";
import createMovie from "../components/Movies";
import ModelMovie from '../models/movie';
import ModelGenre from '../models/genre';
const searchMovies = async (e)=>{
    let search = document.getElementById("search-field");
    if(!search)return;
    
    let nameMovie = search.value+"";
    if(!nameMovie.trim()) return;

    let movies = await ModelMovie.getByQuery(nameMovie)

    let genres = await ModelGenre.getGenre();

    if(!movies && !genres) return;

    for(let movie of movies.results){
        let genresFind = [];
        for(let genre_id of movie.genre_ids){
            let genreFind = genres.find((genre)=>{
                return genre.id == genre_id});
                genresFind = [...genresFind, genreFind];
        }    
        movie.genres = genresFind;
        delete movie.genre_ids;
    }
    
    for(let movie of movies.results){
        let recomendations = await ModelMovie.getByQuery(recomendationMovieName(movie.title))
        movie.recomendations = recomendations?recomendations:[];
    }
    console.log(movies.results)


    addMovieToContainerMovie(movies);
}

const recomendationMovieName = (_nameMovie)=>{
    let nameMovie = _nameMovie+'';
    return nameMovie.slice(0, nameMovie.length/2)
}

const addMovieToContainerMovie = (movies)=>{
    const {MovieCollapse} = createMovie;
    let Movie = MovieCollapse;

    let containerMovie = document.getElementById("container-movies");
    if(!containerMovie){
        containerMovie = toHTML(`<div id="container-movies"> </div>`);
        document.getElementById('app').appendChild(containerMovie);    
    }

    containerMovie.innerHTML='';

    for(let movie of movies.results)
        containerMovie.appendChild(Movie(movie))

}

export default {searchMovies, addMovieToContainerMovie};
