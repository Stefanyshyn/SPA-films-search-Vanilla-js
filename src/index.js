import SearchForm from './components/SearchForm';
import loadPopularMovies from './controller/movieController/loadPopularMovies';

const app = document.getElementById('app');

app.appendChild(SearchForm());

document.addEventListener('DOMContentLoaded', loadPopularMovies);
