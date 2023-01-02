import React,  { Component } from "react";
import { Link, NavLink , useNavigate} from "react-router-dom";
import './CSS/NavBar.css'

const NavBar = () => {

    const navigate = useNavigate();

    let swapdown = () =>{
        document.getElementById('add_box').style.animation = 'pop 0.5s linear forwards'
    }

    const goto_homepage = () => navigate('/')

    return (
            <nav>
                <div className="navbox">
                    <div className="navleftbox">
                        <h1 onClick={goto_homepage}>Notefy 📝</h1>
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