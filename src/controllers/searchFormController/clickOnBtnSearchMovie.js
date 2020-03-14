import toHTML from '../../untils/convert'
import ModelMovie from '../../models/movie';
import addToContainerMovie from '../movieController/untils/addToContainerMovieController';
import _ from 'lodash'
import EmptyElement from '../../components/EmptyElement'
import Spinner from '../../components/Spinner';

const clickOnBtnSearchMovie = async(e)=>{
    let moviesElements = document.getElementsByClassName('movie');
    let app = document.getElementById('app');
    app.appendChild(Spinner())

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
    if(_.isEmpty(movies.results))
        containerMovie.appendChild(EmptyElement(`Nothing found`,`Try other keywords`))
    else addToContainerMovie(movies.results)

    let spinners = document.getElementsByClassName('spinner-wait')
    for(let spinner of spinners){
        spinner.parentElement.removeChild(spinner);        
    }
}

export default clickOnBtnSearchMovie;
