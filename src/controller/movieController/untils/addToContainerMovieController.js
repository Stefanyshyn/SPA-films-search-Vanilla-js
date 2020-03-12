import toHTML from "../../../untils/convert";
import createMovie from "../../../components/Movies";

const addToContainerMovie = (movies)=>{
    const {MovieCollapse} = createMovie;
    let Movie = MovieCollapse;

    let containerMovie = document.getElementById("container-movies");
    if(!containerMovie){
        containerMovie = toHTML(`<div id="container-movies"> </div>`);
        document.getElementById('app').appendChild(containerMovie);    
    }

    containerMovie.innerHTML='';

    for(let movie of movies){
        containerMovie.appendChild(Movie(movie))
    }
}

export default addToContainerMovie;