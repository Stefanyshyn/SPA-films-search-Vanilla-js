class Movie {
    async getByPopular(_page){
        let page = _page?_page:1;
        let result = await fetch(`https://api.themoviedb.org/3/discover/movie?`
        +`api_key=${process.env.API_MOVIE_DATABASE}`
        +`&language=en-US`
        +`&sort_by=popularity.desc`
        +`&include_adult=false`
        +`&include_video=false`
        +`&page=${page}`);
        let json = await result.json();
        let data = json;
        return json;    
    }
    async getByQuery(query){
            if(query && !query.trim()) return;

            let result = await fetch('https://api.themoviedb.org/3/search/movie?'
            + `&` + `api_key=${process.env.API_MOVIE_DATABASE}`
            + `&` + `language=${`en-US`}`
            + `&` + `query=${query}`
            + `&` + `include_adult=${false}`
            )
            let json = await result.json();
            let data = json;
            return data;
        }
}
export default new Movie();