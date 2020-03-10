
console.log(process.env.API_MOIVE_DATABASE)

const searchFilms = async (e)=>{
    let search = document.getElementById("search-field");
    if(!search)return;
    
    let nameMoive = search.value+"";
    if(!nameMoive.trim()) return;

    let result = await fetch('https://api.themoviedb.org/3/search/movie?'
    + `&` + `api_key=${process.env.API_MOIVE_DATABASE}`
    + `&` + `language=${`en-US`}`
    + `&` + `query=${nameMoive}`
    + `&` + `include_adult=${false}`
    )
    let json = await result.json();
    let data = json.link.data;
    return data;
}

export default searchFilms;
