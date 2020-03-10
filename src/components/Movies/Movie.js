import toHTML from '../../untils/convert'

const createMovie = (movie)=>{
    let Movie = `
    <div class="movie">
        <img class="movie-img" src="${process.env.IMAGE_PATH + movie.poster_path}" alt="Image">
        <div class="movie-description">
            <h4>Title:</h4>
            <p>${movie.title}</p>
            <h4>Overview:</h4>
            <p>${movie.overview}</p>
        </div>
    </div>
    `
    
    Movie = toHTML(Movie);

    Movie.addEventListener('click', (e)=>{
        alert(movie.title);
    })

    return Movie;
}

export default createMovie;