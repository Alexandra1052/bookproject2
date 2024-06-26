import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  HashRouter,Routes,Route
}from 'react-router-dom'
import './assets/index.css'
import Home from './pages/Home/Home'
import NavBar from "./assets/components/Navbar/Navbar"
import About from './pages/About/About'
import BookList from './assets/components/BookList/BookList'
import BookDetails from './assets/components/BookDetails/BookDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
  <Routes>
      <Route path="/" element ={<Home />}>
        <Route path="/about" element = {<About/>}/>
        <Route path="/home" element ={<Home/>}></Route>
          <Route path="/book" element= {<BookList/>}/>
          <Route path="/book/:id" element={<BookDetails/>}/>
          <Route path="*" element ={<Home/>}></Route>
       
      </Route>
  </Routes>
 
  </HashRouter>
 
)
