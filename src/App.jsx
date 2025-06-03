import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import "./css/App.css"
import { MovieProvider } from './contexts/MovieContext';

const App = () => {

  return (
    <MovieProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider >
  )
}

export default App