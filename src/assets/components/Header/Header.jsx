import React from "react"
import NavBar from "../Navbar/Navbar"
import SearchForm from "../SearchForm/SearchForm"
import "./Header.css"
import "../../index.css"
function Header(){

    return (
<div className="holder">
    <NavBar />
        <header className="header-content">
      
            <div className="header content 
            flex-content text-center text-white" >
                <h2 className="header-title 
                text-capitalize">Find your book of choice</h2> <br></br>
                <div className="divdiv">
                <p className="header-text fs-18 fw-3">
                Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                   type specimen book.
                </p>
                </div>
             
                <SearchForm/>
            </div>
        </header>
</div>
    )
}
export default Header