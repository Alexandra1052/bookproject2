import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  BrowserRouter,Routes,Route
}from 'react-router-dom'
import './assets/index.css'
import Home from './pages/Home/Home'
import NavBar from "./assets/components/Navbar/Navbar"
import About from './pages/About/About'
import BookList from './assets/components/BookList/BookList'
import BookDetails from './assets/components/BookDetails/BookDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element ={<Home />}>
        <Route path="about" element = {<About/>}/>
        
          <Route path="book" element= {<BookList/>}/>
          <Route path="/book/:id" element={<BookDetails/>}/>
       
      </Route>
  </Routes>
 
  </BrowserRouter>
 
)
