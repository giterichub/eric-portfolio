import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import About from './sections/About';
import Timeline from './sections/Intro';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import './styles/navbar.css';
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Timeline />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
