import { useState } from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import HomeGrid from './components/HomeGrid/HomeGrid';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <HomeGrid />
      <Footer />
    </>
  )
}

export default App
