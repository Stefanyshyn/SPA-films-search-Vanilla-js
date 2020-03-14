import toHTML from '../../untils/convert';
import moment from 'moment';
import MovieRecomendation from './MovieRecomendation';
import _ from 'lodash';
import EmptyElement from '../EmptyElement';

const MovieExpand = (movie)=>{
    let Movie = `
    <div class="movie">
        <div class="movie-img">
        ${
            movie.poster_path?
                `<img src="${process.env.IMAGE_PATH + movie.poster_path}" alt="Image">`:
                `<img src="../../../public/no_movie.svg" alt="Image">`
        }
        </div>
        <div>
            <div class="movie-description">
                <h4>${`${movie.title} (${moment(movie.release_date).format('YYYY')})`}</h4>
                <div class="movie-details-description">
                    <span>Genres - ${movie.genres.map(genre=>genre.name).join(', ')}</span>
                    |
                    <span> Release Date - ${moment(movie.release_date).format('MMM DD YYYY')}</span>
                </div>
                <div class="movie-overview">
                    <h4>Overview</h4>
                    <p>${movie.overview}</p>
                </div>
            </div>
            <div id="movie-recomendations">
                <h4>Recomendations</h4>
                <div id="movie-recomendations-container">
                </div>
            </div>
        </div>
    </div>
    `
    Movie = toHTML(Movie);
    
    let containerRecomendation = Movie.children[1].children[1].children[1];
    if(movie.recomendations.results.length <= 1){
        containerRecomendation.appendChild(EmptyElement(`Nothing found`, ``))
    }else{
        for(let i=1; i <=4 && i < movie.recomendations.results.length; ++i){
            let recomendation = movie.recomendations.results[i];

            containerRecomendation.appendChild(MovieRecomendation(recomendation));
        }
    }
    return Movie;
}

export default MovieExpand;