import Movie from '../../components/Movies/MovieExpand';
const ClickOnCollapseMovie = (movie)=>{
    return (e)=>{
        let container = document.getElementById('container-movies');
        let app = document.getElementById('app');
        if(app){
            if(container)
                app.removeChild(container);
            else return;
        }
        app.appendChild(Movie(movie));    
    }
}

export default ClickOnCollapseMovie;