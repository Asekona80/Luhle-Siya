import { useState } from 'react'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Journal from './components/Journal'




function App() {


    return (
      <div>
        <Navbar />
        <Home/>
        <Journal/>
       
      
      </div>
    )
  }
  
  export default App