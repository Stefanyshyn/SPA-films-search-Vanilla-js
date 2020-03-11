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
    let containerMovie = document.getElementById("container-movies");
    containerMovie = containerMovie?containerMovie : toHTML(`<div id="container-movies"> </div>`)
    containerMovie.innerHTML='';

    for(let movie of movies.results)
        containerMovie.appendChild(createMovie(movie))

    document.getElementById('app').appendChild(containerMovie);    
}

export default {searchMovies, addMovieToContainerMovie};
