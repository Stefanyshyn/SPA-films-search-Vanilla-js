import toHTML from "../untils/convert";
import createMovie from "../components/Movies";
import ModelMovie from '../models/movie';

const searchMovies = async (e)=>{
    let search = document.getElementById("search-field");
    if(!search)return;
    
    let nameMovie = search.value+"";
    if(!nameMovie.trim()) return;

    let movies = await ModelMovie.getByQuery(nameMovie)

    addMovieToContainerMovie(movies);
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
