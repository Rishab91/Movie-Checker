import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { searchMovies, getPopularMovies } from '../services/api'
import "../css/Home.css"

const Home = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load_popular_movies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      }
      catch (err) {
        console.log(err);
        setError("Failed to load movies ...");
      }
      finally {
        setLoading(false)
      }
    }
    load_popular_movies()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    
    if (!searchQuery.trim()) return
    if (loading) return
    setLoading(true)
    try{
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    }
    catch (err){
        console.log(err)
        setError("Failed to search Movies...")
    }
    finally{
      setLoading(false)
    }
    setSearchQuery("")
  };

  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input type='text' placeholder='Search for movies...' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
        <button type='submit' className='search-button'>Search</button>
      </form>
      {error && <div className='error-message'>{error}</div>}
      {loading ? <div className='loading'>Loading</div> : <div className='movies-grid'>
        {movies.map((movie) =>
          movie.title.toLocaleLowerCase().startsWith(searchQuery.toLowerCase()) && (<MovieCard movie={movie} key={movie.id} />))}
      </div>}
    </div>
  )
}

export default Home