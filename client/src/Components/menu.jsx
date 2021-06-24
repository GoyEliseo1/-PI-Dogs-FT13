import React, { useState } from 'react';
import axios from 'axios';
import card from './Styles/card.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { nextPage } from '../Redux/Actions/actions';
const menu = (props, page) => {
    if (props) {
        console.log(props.dog.name)
        return (
                <div >
                <select name="OS">
                <option value={props.dog.id}> {props.dog.name}</option> 
                </select>
                
                </div>

        )
    }
    else {
        return (
            <>
                
            </>
        )
    }
}


export default menu;