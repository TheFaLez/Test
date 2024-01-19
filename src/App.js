import React from 'react'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import ToDo from './components/ToDo'
import Navbar from './components/Navbar'
import "./style/style.css"
import Carousel from './components/Carousel'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/todo" element={<ToDo />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App