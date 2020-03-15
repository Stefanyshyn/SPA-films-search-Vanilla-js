import addToContainerMovie from './untils/addToContainerMovieController'
import EmptyElement from '../../components/EmptyElement'
import ModelMovie from '../../models/movie'
import Pagination from '../../components/Pagination';
import deleteController from '../deleteController';
import chechContainerMovieController from './untils/chechContainerMovieController';
import _ from 'lodash';

const loadPopularMovies = async (e)=>{
    let app = document.getElementById('app');

    deleteController.deletePagination();
    deleteController.deleteMovieExpand();

    let search = document.getElementById("search-field");
    if(!search)return;

    let containerMovie = chechContainerMovieController();
    
    let movies = await ModelMovie.getByPopular(1);    

    if(_.isEmpty(movies.results)){
        containerMovie.appendChild(EmptyElement(`Nothing found`, `Try other keywords`))
        deleteController.deleteSpinner();
        return;
    }
    else addToContainerMovie(movies.results)

    let pagination = Pagination(ModelMovie.getByPopular,movies.page, movies.total_pages);
    app.appendChild(pagination)

    deleteController.deleteSpinner();
}

export default loadPopularMovies;