import React,  { Component } from "react";
import './CSS/NavBar.css'

const NavBar = () => {

    let swapdown = () =>{
        document.getElementById('add_box').style.animation = 'pop 0.5s linear forwards'
    }

    return (

        <nav>
            
            <div className="navbox">
                <div className="navleftbox">
                    <h1>Notefy 📝</h1>
                </div>

                <div className="navmidbox">
                    <input type="text" className="navsearchbar" id="searchbar" placeholder=" Search "/>
                    <input type="button" value="ADD"  id="addbtn" onClick={ swapdown}/>
                </div>

                <div className="navrightbox">
                    <h6>Help❔</h6>
                </div>


            </div>


        </nav>

    );
 
}
export default NavBar;