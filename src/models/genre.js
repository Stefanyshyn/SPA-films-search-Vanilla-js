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

    async addGenreName(_movies){
        let movies = _movies;
        let genres = await this.getGenre();

        if(!movies && !genres) return;
    
        for(let movie of movies){
            let genresFind = [];
            for(let genre_id of movie.genre_ids){
                let genreFind = genres.find((genre)=>{
                    return genre.id == genre_id});
                    genresFind = [...genresFind, genreFind];
            }    
            movie.genres = genresFind;
            delete movie.genre_ids;
        }
        return movies;
    }

}

export default new Genre();