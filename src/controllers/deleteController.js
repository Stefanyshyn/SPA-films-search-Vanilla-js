const app = document.getElementById('app');

const deleteSpinner = ()=>{
    let spinners = document.getElementsByClassName('spinner-wait')
    for(let spinner of spinners){
        spinner.parentElement.removeChild(spinner);        
    }
}

const deleteMovieExpand = ()=>{
    let moviesElements = document.getElementsByClassName('movie');
    
    while(moviesElements.length){
        app.removeChild(moviesElements[0]);
        delete moviesElements[0];
    }
}

const deletePagination = ()=>{
    let paginations = document.getElementsByClassName('pagination')
    for(let pagination of paginations){
        pagination.parentElement.removeChild(pagination);        
    }
}

export default {deleteSpinner, deleteMovieExpand, deletePagination}