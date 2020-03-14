import ModelMovie from '../../models/movie';
import addToContainerMovie from '../movieController/untils/addToContainerMovieController';
import _ from 'lodash'
import EmptyElement from '../../components/EmptyElement'
import Spinner from '../../components/Spinner';
import deleteController from '../deleteController';
import chechContainerMovieController from '../movieController/untils/chechContainerMovieController'
import Pagination from '../../components/Pagination';

const clickOnBtnSearchMovie = async(e)=>{
    let app = document.getElementById('app');


    let search = document.getElementById("search-field");
    if(!search)return;

    let nameMovie = (search.value+"").trim();
    if(!nameMovie) return;

    deleteController.deletePagination();
    deleteController.deleteMovieExpand();
    
    app.appendChild(Spinner())
    let containerMovie = chechContainerMovieController();

    let movies = await ModelMovie.getByQuery(nameMovie,1);

    if(_.isEmpty(movies.results))
        containerMovie.appendChild(EmptyElement(`Nothing found`,`Try other keywords`))
    else addToContainerMovie(movies.results)

    let pagination = Pagination(ModelMovie.getByQuery.bind(null, nameMovie),movies.page, movies.total_pages);
    app.appendChild(pagination)

    deleteController.deleteSpinner();
}

export default clickOnBtnSearchMovie;
