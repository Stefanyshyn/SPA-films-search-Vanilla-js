import toHTML from '../../../untils/convert'

const chechContainerMovieController = ()=>{
    let containerMovie = document.getElementById("container-movies");
    if(!containerMovie){
        containerMovie = toHTML(`<div id="container-movies"> </div>`);
        document.getElementById('app').appendChild(containerMovie);    
    }
    containerMovie.innerHTML='';
    return containerMovie;
}

export default chechContainerMovieController;