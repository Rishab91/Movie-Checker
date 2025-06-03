import { createContext, useState, useContext, useEffect } from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setfavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) setfavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))

    }, [favorites])

    const addToFavorite = (movie) => {
        setfavorites(prev => [...prev , movie])
    }

    const removeFavorite = (movieId) => {
        setfavorites(prev => prev.filter (movie => movie.id != movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

const value = {
    favorites,
    addToFavorite,
    removeFavorite,
    isFavorite
}

return  <MovieContext.Provider value={value}>
    {children}
</MovieContext.Provider>
}