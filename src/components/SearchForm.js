import toHTML from '../untils/convert';
import clickOnBtnSearchMovie from "../controllers/searchFormController/clickOnBtnSearchMovie"
import loadPopularMovies from "../controllers/movieController/loadPopularMovies"

const SearchForm = ()=>{
    let form = `
        <div  class='searchForm'>
            <img src="../../public/main.png" alt="Image">
            <input id="search-field" class="form-control" type="text"/>
            <button id="button-search-form" class="btn btn-dark">Saerch</button>
        </div>
    `
    const formElement = toHTML(form);

    formElement.children[0].addEventListener("click", loadPopularMovies)
    formElement.children[1].addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            clickOnBtnSearchMovie();
        }
    })
    formElement.children[2].addEventListener("click", clickOnBtnSearchMovie)

    return formElement;
}

export default SearchForm;