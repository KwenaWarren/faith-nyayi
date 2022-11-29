import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Social from './components/Social'
import About from './components/About'
import Skill from './components/Skill'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Education />
      <Experience />
      <Skill />
      <Contact/>
      <Footer />
      <Social />
    </div>
  )
}

export default App
