import searchFilms from "./events/SearchForm"
import search from "./components/SearchForm";

console.log(process.env.URL)

document.getElementById('button-search-form').addEventListener("click", searchFilms)