import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import About from './component/About/About';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route exact path='*' element={<Home />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
