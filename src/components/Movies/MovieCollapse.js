import toHTML from '../../untils/convert'
import ClickOnCollapseMovie from '../../controller/movieController/clickOnCollapseMovie'

const MovieCollapse = (movie)=>{
    let Movie = `
    <div class="movie-coll">
        <div class="movie-coll-img">
            ${
                movie.poster_path?
                    `<img src="${process.env.IMAGE_PATH + movie.poster_path}" alt="Image">`:
                    `<img src="../../../public/no_movie.svg" alt="Image">`
                }
        </div>
        <div class="movie-coll-description">
            <h4>${movie.title}</h4>
            <p>${movie.overview}</p>
        </div>
    </div>
    `
    Movie = toHTML(Movie);

    Movie.addEventListener('click', ClickOnCollapseMovie(movie))

    return Movie;
}

export default MovieCollapse;