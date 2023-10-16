import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Section-1/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'


function App() {


  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      
    </>
  )
}

export default App
