import searchMovies from "../events/SearchForm"
import SearchForm from "../components/SearchForm";
import ModelMovie from '../models/movie';
import toHTML from '../untils/convert';
import createMovie from "../components/Movies";

document.getElementById('button-search-form').addEventListener("click", searchMovies.searchMovies)

document.addEventListener('DOMContentLoaded', async ()=>{
    let movies = await ModelMovie.getByPopular(1);

    searchMovies.addMovieToContainerMovie(movies)
});