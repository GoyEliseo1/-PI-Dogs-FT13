import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams} from "react-router-dom";
import NavBar from './Components/NavBar'
import Form from './Components/form';
import Cards from './Components/cards';
import Search from './Components/SearchBar'
import Home from './Components/Home';
import { AddTodo, Tempe } from './Redux/Actions/actions';
import { connect } from 'react-redux';
import store from './Redux/Reducers/Reducers';
import { compose } from 'redux';

var x = 0
async function temp() {
  const aa= await axios.default.get(`http://localhost:3001/temperament`)
  .then(x=>x.data)
  return aa
}

const App = ({ pag, AddTodo,AddTodonextn, Tempe}) =>{
  if (pag.dogs.length) {
    if(!pag.temp.length){
      temp()
      .then(x=>Tempe(x))
    }
    else {console.log(pag)}
  }
  else {
    //AddTodo(x.data)
    async function buscalasRazas() {
      const ola= await axios.default.get(`http://localhost:3001/dog?page=${pag.page}`)
      .then(x => x.data.map(a=>axios.default.get(`http://localhost:3001/b/bb?id=${a.id}`)))
      .then(b=>Promise.all(b))
      .then(x=>x.map(x=>x.data))
      .then(x=>x.map(x=>x.map(x=>x.name)))
    return ola
    }

    async function agregalosTemps(x) {
      const aa= await axios.default.get(`http://localhost:3001/dog?page=${pag.page}`)
      .then(b=>b.data.map((a,c)=>Object.defineProperty(a, 'temperament', {value: x[c]})))
    return aa
    }

    buscalasRazas().then(x=>agregalosTemps(x))
    .then(x=>AddTodo(x))
  
    
  }

  return (

    <Router>
      <div className="App">

        <Route path='/' >
          <NavBar />
        </Route>

        <Route path='/aa' >
          <Form />
        </Route>

        <Route exact path='/bb' >
          <Cards dogs={pag.dogs} />
        </Route>

        <Route path='/raza' >
          <Search/>
        </Route>

      </div>
    </Router>
  );

}


const mapStatetoProps = state => ({
  pag: state
})
const mapDispatchtoProps ={
  AddTodo,
  Tempe
  }



export default connect(mapStatetoProps, mapDispatchtoProps, )(App);