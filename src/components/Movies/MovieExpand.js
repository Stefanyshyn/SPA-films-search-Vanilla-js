import toHTML from '../../untils/convert'
import ClickOnCollapseMovie from '../../events/Movie/ClickOnCollapseMovie'
import moment from 'moment';

const MovieExpand = (movie)=>{

    console.log(movie)
    let Movie = `
    <div class="movie">
        <div class="movie-img">
            <img src="${process.env.IMAGE_PATH + movie.poster_path}" alt="Image">
        </div>
        <div class="movie-description">
            <h4>${`${movie.title} (${moment(movie.release_date).format('YYYY')})`}</h4>
            <div class="movie-details-description">
                <span>Genres - ${movie.genres.map(genre=>genre.name).join(', ')}</span>
                |
                <span> Release Date - ${moment(movie.release_date).format('MMM DD YYYY')}</span>
            </div>
            <p>${movie.overview}</p>
        </div>
    </div>
    `
    Movie = toHTML(Movie);

    Movie.addEventListener('click', ClickOnCollapseMovie(movie))

    return Movie;
}
`
popularity: 871.5
vote_count: 653
video: false
poster_path: "/uPGq1mkEXznUpapDmOSxbsybjfp.jpg"
id: 475303
adult: false
backdrop_path: "/6fkqwqLEcDZOEAnBBfKAniwNxtx.jpg"
original_language: "en"
original_title: "A Rainy Day in New York"
genre_ids: (2) [35, 10749]
title: "A Rainy Day in New York"
vote_average: 6.7
overview: "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures."
release_date: "2019-07-26"
`

export default MovieExpand;