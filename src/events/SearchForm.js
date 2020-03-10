
console.log(process.env.API_MOIVE_DATABASE)

const searchFilms = (e)=>{
    let search = document.getElementById("search-field");
    if(!search)return;
    console.log(1)
    let result = fetch(`https://api.themoviedb.org/3/search/movie`,
        {
            "api_key":process.env.API_MOIVE_DATABASE,
            "language":'en-US',
            "page":1,
            "include_adult":false
        }
    )
    console.log(result.json())
    console.log(2)
    
}

export default searchFilms;
