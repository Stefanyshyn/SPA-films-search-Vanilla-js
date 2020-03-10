import toHTML from '../../untils/convert'

const createMovie = ()=>{
    let Movie = `
    <div class="movie">
        <p>${1}</p>
    </div>
    `
    
    Movie = toHTML(Movie);

    Movie.addEventListener('click', (e)=>{
        alert('movie');
    })
    return Movie;
}

export default createMovie;