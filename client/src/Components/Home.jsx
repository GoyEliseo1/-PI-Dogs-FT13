import React, { useState } from 'react';
import axios from 'axios';
import card from './Styles/card.css'


function Home() {
    const [dogs, setdogs] = useState([])
    if (dogs.length) {
        console.log(dogs)
        return (
            <>
                <div className='prueba'>
                    <img src={dogs[1].image.url} className='imagen'></img>
                        <div className="card-desc">
                            <div className='Name'>
                                {dogs[1].name}
                            </div>
                            <div className='titletemperament'>Temperament</div>
                            <p className='temperament'>
                                {dogs[1].temperament}
                            </p>
                    </div>
                </div>
            </>
        )
    }
    else {
        axios.default.get(`http://localhost:3001/dog`)
            .then(x => setdogs(x.data))
        return (
            <>

            </>
        )
    }

}

export default Home;