import prepareMovie from './untils/prepareMovieBeforeAppendToContainer'
import addToContainerMovie from './untils/addToContainerMovieController'
import ModelMovie from '../../models/movie'

const loadPopularMovies = async (e)=>{
    let moviesElements = document.getElementsByClassName('movie');
    let app = document.getElementById('app');

    while(moviesElements.length)
        moviesElements?app.removeChild(moviesElements[0]):'';
    let search = document.getElementById("search-field");
    if(!search)return;

    let movies = await ModelMovie.getByPopular(1);    

    for(let movie of movies.results)

    addToContainerMovie(movies.results)
}

export default loadPopularMovies;