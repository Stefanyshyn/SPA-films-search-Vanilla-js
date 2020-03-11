import searchMovies from "../events/SearchForm"
import SearchForm from "../components/SearchForm";
import ModelMovie from '../models/movie';
import toHTML from '../untils/convert';
import createMovie from "../components/Movies";
import ModelGenre from '../models/genre';

document.getElementById('button-search-form').addEventListener("click", searchMovies.searchMovies)

document.addEventListener('DOMContentLoaded', async ()=>{
    let movies = await ModelMovie.getByPopular(1);

    let genres = await ModelGenre.getGenre();

    if(!movies && !genres) return;

    for(let movie of movies.results){
        let genresFind = [];
        for(let genre_id of movie.genre_ids){
            let genreFind = genres.find((genre)=>{
                console.log(genre);
                return genre.id == genre_id});
                genresFind = [...genresFind, genreFind];
        }    
        movie.genres = genresFind;
        delete movie.genre_ids;

    }
    
    searchMovies.addMovieToContainerMovie(movies)
});