import toHTML from '../../untils/convert'
import ClickOnCollapseMovie from '../../events/Movie/ClickOnCollapseMovie'

const MovieCollapse = (movie)=>{
    let Movie = `
    <div class="movie-coll">
        <div class="movie-coll-img">
            <img src="${process.env.IMAGE_PATH + movie.poster_path}" alt="Image">
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