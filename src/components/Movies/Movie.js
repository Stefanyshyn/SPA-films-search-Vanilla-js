import toHTML from '../../untils/convert'

const createMovie = (movie)=>{
    let Movie = `
    <div class="movie">
        <div class="movie-img">
            <img src="${process.env.IMAGE_PATH + movie.poster_path}" alt="Image">
        </div>
        <div class="movie-description">
            <h4>${movie.title}</h4>
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