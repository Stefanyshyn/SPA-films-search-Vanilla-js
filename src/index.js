import SearchForm from './components/SearchForm';
import loadPopularMovies from './controllers/movieController/loadPopularMovies';

const app = document.getElementById('app');

app.appendChild(SearchForm());

loadPopularMovies();
