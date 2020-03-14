import toHTML from '../../untils/convert'
import addToContainerMovie from '../movieController/untils/addToContainerMovieController';
import _ from 'lodash'
import EmptyElement from '../../components/EmptyElement'
import Spinner from '../../components/Spinner';
import deleteController from '../deleteController';
import chechContainerMovieController from '../movieController/untils/chechContainerMovieController';
import Pagination from '../../components/Pagination';
import ModelMovie from '../../models/movie';

let app = document.getElementById('app');

const getPage = (functionSearchMovies, page)=>{
    return async (e)=>{

        deleteController.deletePagination()

        app.appendChild(Spinner())

        let containerMovie = chechContainerMovieController();

        let movies = await functionSearchMovies(page);

        if(_.isEmpty(movies.results))
            containerMovie.appendChild(EmptyElement(`Nothing found`,`Try other keywords`))
        else addToContainerMovie(movies.results)

        let pagination = Pagination(ModelMovie.getByPopular,movies.page, movies.total_pages);
        app.appendChild(pagination)

        deleteController.deleteSpinner()
    }
}

export default getPage;