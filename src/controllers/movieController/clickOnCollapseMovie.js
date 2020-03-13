import Movie from '../../components/Movies/MovieExpand';
import _ from 'lodash';
import prepareMovie from '../../controllers/movieController/untils/prepareMovieBeforeAppendToContainer'

const ClickOnCollapseMovie = (_movie)=>{
    return async(e)=>{
        let movie = _.cloneDeep(_movie);

        let container = document.getElementById('container-movies');
        let movieElements = document.querySelectorAll('#app>.movie');
        let app = document.getElementById('app');
        if(app){
            if(container){
                app.removeChild(container);
            }
            if(movieElements){
                for(let i = 0; i < movieElements.length; ++i){
                    app.removeChild(movieElements[i]);
                }
            }
        }
        
        movie = await prepareMovie(movie)

        app.appendChild(Movie(movie));
    }
}

export default ClickOnCollapseMovie;