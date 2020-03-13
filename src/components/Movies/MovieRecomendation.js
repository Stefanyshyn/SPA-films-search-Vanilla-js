import toHTML from '../../untils/convert'
import ClickOnCollapseMovie from '../../controllers/movieController/clickOnCollapseMovie'

const MovieRecomendation = (_movie)=>{
    let movie = _movie;
    let Movie = `
        <div class="movie-recomendation">
        ${
            _movie.poster_path?
            `<img src="${process.env.IMAGE_PATH + _movie.poster_path}" alt="Image">`
            :
            `
                <img src="../../../public/no_movie.svg" alt="Image">
                <p>${_movie.title}</p>
            `
        }
        </div>
    `

    let MovieElement = toHTML(Movie);

    MovieElement.addEventListener('click', ClickOnCollapseMovie(movie))

    return MovieElement;
}

export default MovieRecomendation;