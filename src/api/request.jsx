
const API_KEY = "5ed9ddf003933bdff272313393959404";


const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchTrendingIND : `/discover/movie?api_key=${API_KEY}&with_original_language=hi`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/move/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `genre/28/movies?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovies: `genre/35/movies?api_key=${API_KEY}&language=en-US`,
    // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=16`,
    fetchRomanceMovies: `genre/10749/movies?api_key=${API_KEY}&language=en-US`,
    fetchDocumentaries: `genre/99/movies?api_key=${API_KEY}&language=en-US`,
    fetchAnimationMovies: `genre/16/movies?api_key=${API_KEY}&language=en-US`,
    fetchHorrorMovies: `genre/27/movies?api_key=${API_KEY}&language=en-US`

};

export default requests;

//https://api.themoviedb.org/3/discover/tv?api_key=5ed9ddf003933bdff272313393959404&with_geners=28