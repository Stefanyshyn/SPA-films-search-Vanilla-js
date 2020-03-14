import Movie from '../../components/Movies/MovieExpand';
import prepareMovie from '../../controllers/movieController/untils/prepareMovieBeforeAppendToContainer'
import deleteController from '../deleteController';
import Spinner from '../../components/Spinner'

let app = document.getElementById('app');

const ClickOnCollapseMovie = (_movie)=>{
    return async(e)=>{
        let movie = _movie;
        
        deleteController.deletePagination();
        deleteController.deleteMovieExpand();
        deleteController.deletePagination();
        deleteController.deleteContainerMovies();

        app.appendChild(Spinner());

        movie = await prepareMovie(movie)

        app.appendChild(Movie(movie));
        deleteController.deleteSpinner();
    }
}

export default ClickOnCollapseMovie;