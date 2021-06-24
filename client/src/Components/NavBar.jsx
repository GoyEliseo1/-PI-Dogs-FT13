import React from "react";
import './Styles/navBar.css'
import SearchBar from './SearchBar.jsx';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Search from "./SearchBar.jsx";
import { connect } from "react-redux";
import { NextPage, PreviusPage, searchdog} from '../Redux/Actions/actions';


function Nav({pag, NextPage,PreviusPage, searchdog} ){
const [dog, setDogs]= useState("")
    var algo;
    return (
        <nav className='nav1'>

            <ul className='nav'>
                <Link to="/"> <img src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Dog-icon.png" className='jaj' /> </Link>
                <li> <a > Contact</a></li>
                <li><a href="#s">News</a></li>
                <li><a href="#about">About  </a>   </li>
                <li><Link to="/s"> Home </Link></li>
                <form  action={`http://localhost:3000/raza`} method="get" onSubmit={(e) => {
                        searchdog(dog)
                        e.preventDefault();
                        
                
                    
                }}>
                    <input
                        type="text"
                        placeholder="Ciudad..."
                        onChange={e=> setDogs(e.target.value)}
                    />
                    <input type="submit" value="Agregar" />
                </form>
            </ul>
        </nav>
    )
}

const mapStatetoProps = state => ({
    pag: state
})
const mapDispatchtoProps ={
    NextPage,
    PreviusPage,
    searchdog
    }



export default connect(mapStatetoProps, mapDispatchtoProps)(Nav);