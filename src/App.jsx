import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import "./css/App.css"

const App = () => {

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App