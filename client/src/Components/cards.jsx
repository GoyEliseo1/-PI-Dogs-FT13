import React, { useState } from 'react';
import Card from './card';
import Menu from './menu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";
import { NextPage, PreviusPage, AddTodo,Adddogs } from '../Redux/Actions/actions';

function Cards({pag, NextPage,PreviusPage,Adddogs}) {
    if(pag.sdog.length){
        if(pag.Adddogs.length==0){
        async function temp() {
            const aa= await axios.default.get(`http://localhost:3001/dog/?name=${pag.sdog}`)
            .then(x=> Adddogs(x.data))
            return aa}
            temp()
            .then(x=>x)
        }

        else{
            console.log('aca')
            console.log(pag.Adddogs)
            return(<>
                {pag.Adddogs.map(c => <Card dog={c} />)}
        </>)}
        
    }
    else {
    if (pag.dogs.length) {
        return (
            <>
                {console.log('olasa')}
                {pag.dogs.map(c => <Card dog={c} />)}
                <form action={`http://localhost:3000/bb`} method="get">
                <select name="id">
                    {pag.temp.map((x,b)=>(<option value={b}>{x.name}</option>))}
                </select>
                <input type="submit"></input>
                    </form>
                
                <button onClick={()=>PreviusPage() }>Previus</button>
                <button onClick={()=>NextPage() }>next</button>
            </>
        )
    }}

        return (
            <>
                <h1>Cargando...</h1>
            </>
        )
    }


const mapStatetoProps = state => ({
    pag: state
})
const mapDispatchtoProps ={
    NextPage,
    PreviusPage,AddTodo,Adddogs
    }



export default connect(mapStatetoProps, mapDispatchtoProps)(Cards);