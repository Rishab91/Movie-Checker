const API_KEY = "749e97d6ac4bc4e0a755bd3d91de3b79";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async() => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async(query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURI(query)}`);
    const data = await response.json()
    return data.results
}



