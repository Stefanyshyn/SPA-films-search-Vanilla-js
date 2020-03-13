import toHTML from '../../untils/convert'
import ModelMovie from '../../models/movie';
import addToContainerMovie from '../movieController/untils/addToContainerMovieController';

const clickOnBtnSearchMovie = async(e)=>{
    let moviesElements = document.getElementsByClassName('movie');
    let app = document.getElementById('app');
    //TODO::refactor
    while(moviesElements.length)
        moviesElements?app.removeChild(moviesElements[0]):'';

    
    let containerMovie = document.getElementById("container-movies");
    if(!containerMovie){
        containerMovie = toHTML(`<div id="container-movies"> </div>`);
        document.getElementById('app').appendChild(containerMovie);    
    }
    containerMovie.innerHTML='';

    let search = document.getElementById("search-field");
    if(!search)return;

    let nameMovie = (search.value+"").trim();
    if(!nameMovie) return;

    let movies = await ModelMovie.getByQuery(nameMovie);

    addToContainerMovie(movies.results)
}

export default clickOnBtnSearchMovie;
