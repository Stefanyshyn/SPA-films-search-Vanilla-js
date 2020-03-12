import toHTML from '../untils/convert';
import clickOnBtnSearchMovie from "../controller/searchFormController/clickOnBtnSearchMovie"

const SearchForm = ()=>{
    let form = `
        <div  class='searchForm'>
            <input id="search-field" class="form-control" type="text"/>
            <button id="button-search-form" class="btn btn-dark">Saerch</button>
        </div>
    `
    const formElement = toHTML(form);

    formElement.children[1].addEventListener("click", clickOnBtnSearchMovie)

    return formElement;
}

export default SearchForm;