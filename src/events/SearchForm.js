import toHTML from "../untils/convert";
import createMovie from "../components/Movies";

const searchMovies = async (e)=>{
    let search = document.getElementById("search-field");
    if(!search)return;
    
    let nameMovie = search.value+"";
    if(!nameMovie.trim()) return;
    let result = await fetch('https://api.themoviedb.org/3/search/movie?'
    + `&` + `api_key=${process.env.API_MOVIE_DATABASE}`
    + `&` + `language=${`en-US`}`
    + `&` + `query=${nameMovie}`
    + `&` + `include_adult=${false}`
    )
    let json = await result.json();
    let data = json;
    
    let containerMovie = document.getElementById("container-movies");
    containerMovie = containerMovie?containerMovie : toHTML(`<div id="container-movies"> </div>`)
    containerMovie.innerHTML='';
    console.log(data)

    for(let movie of data.results)
        containerMovie.appendChild(createMovie(movie))

    document.getElementById('app').appendChild(containerMovie);
}

export default searchMovies;
