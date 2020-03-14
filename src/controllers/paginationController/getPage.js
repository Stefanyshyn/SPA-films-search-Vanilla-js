import toHTML from '../../untils/convert'
import addToContainerMovie from '../movieController/untils/addToContainerMovieController';
import _ from 'lodash'
import EmptyElement from '../../components/EmptyElement'
import Spinner from '../../components/Spinner';

const getPage = (functionSearchMovies, page)=>{
    return async (e)=>{
        console.log(page)
        let app = document.getElementById('app');
        app.appendChild(Spinner())
    
        let containerMovie = document.getElementById("container-movies");
        if(!containerMovie){
            containerMovie = toHTML(`<div id="container-movies"> </div>`);
            document.getElementById('app').appendChild(containerMovie);    
        }
        containerMovie.innerHTML='';
    
        let movies = await functionSearchMovies(page);

        if(_.isEmpty(movies.results))
            containerMovie.appendChild(EmptyElement(`Nothing found`,`Try other keywords`))
        else addToContainerMovie(movies.results)

        let spinners = document.getElementsByClassName('spinner-wait')
        for(let spinner of spinners){
            spinner.parentElement.removeChild(spinner);        
        }
    }
}

export default getPage;