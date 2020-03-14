import addToContainerMovie from './untils/addToContainerMovieController'
import EmptyElement from '../../components/EmptyElement'
import ModelMovie from '../../models/movie'
import Spinner from '../../components/Spinner';

const loadPopularMovies = async (e)=>{
    let moviesElements = document.getElementsByClassName('movie');
    let app = document.getElementById('app');

    while(moviesElements.length)
        moviesElements?app.removeChild(moviesElements[0]):'';
    app.appendChild(Spinner())

    let search = document.getElementById("search-field");
    if(!search)return;
    
    let movies = await ModelMovie.getByPopular(1);    

    if(_.isEmpty(movies.results))
        containerMovie.appendChild(EmptyElement(`Nothing found`, `Try other keywords`))
    else addToContainerMovie(movies.results)

    let spinners = document.getElementsByClassName('spinner-wait')
    for(let spinner of spinners){
        spinner.parentElement.removeChild(spinner);        
    }
}

export default loadPopularMovies;