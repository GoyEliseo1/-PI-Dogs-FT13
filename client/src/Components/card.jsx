import React, { useState } from 'react';
import axios from 'axios';
import card from './Styles/card.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { nextPage } from '../Redux/Actions/actions';
const Card = (props, page) => {
    if (props.dog.name) {
        return (
                <div className='prueba'>
                    <img src={props.dog.image} className='imagen'></img>
                    <div className="card-desc">
                        <div className='Name'>
                            {props.dog.name}
                        </div>
                        <div className='titletemperament'>Temperament</div>
                        <p className='temperament'>
                            {/* {props.dog.temperament.join().replaceAll(',', ', ')} */}
                        </p>
                    </div>
                </div>

        )
    }
    else {
        return (
            <>
                {console.log(props.dog)}
            </>
        )
    }
}


export default Card;