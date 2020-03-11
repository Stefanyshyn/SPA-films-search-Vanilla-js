class Genre{
    async getGenre(_page){
        let page = _page?_page:1;
        let result = await fetch(`https://api.themoviedb.org/3/genre/movie/list?`
        +`api_key=${process.env.API_MOVIE_DATABASE}`
        +`&language=en-US`);
        let json = await result.json();
        let data = json.genres;
        return data;   
    }
}

export default new Genre();