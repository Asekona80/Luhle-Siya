import { useState } from 'react'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Journal from './components/Journal'
import Family from './components/Family'
import Footer from './components/Footer'
import Contact from './components/Contact'




function App() {


    return (
      <div>
        <Navbar />
        <Home/>
        <Journal/>
        <Family/>
        <Footer/>
        <Contact/>
      </div>
    )
  }
  
  export default App