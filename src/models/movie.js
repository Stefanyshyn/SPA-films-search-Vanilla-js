function recomendationMovieName(_nameMovie){
    let nameMovie = _nameMovie+'';
    return nameMovie.slice(0, nameMovie.length/2)
}

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
        return data;    
    }
    async getByQuery(query, _page){
        if(query && !query.trim()) return;
        let page = new Number(_page);
        let result = await fetch('https://api.themoviedb.org/3/search/movie?'
        + `&` + `api_key=${process.env.API_MOVIE_DATABASE}`
        + `&` + `language=${`en-US`}`
        + `&` + `query=${query}`
        + `&` + `page=${page}`
        + `&` + `include_adult=${false}`
        )
        let json = await result.json();
        let data = json;
        return data;
    }
    async addRecomendationsToMovie(_movie){
        let movie = _movie;
        let recomendations = await this.getByQuery(recomendationMovieName(movie.title),1)
        movie.recomendations = recomendations?recomendations:[];
        return movie
    }    
    
}
export default new Movie();