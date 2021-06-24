
import SearchBar from './SearchBar.jsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Form() {
    const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) {
    setError('el usuario tiene que ser un email');
    } else {
    setError('');
    }
    setUsername(value);
}

    return (
<form>
        aaaaa<input className={error && 'danger'}
        name="username" value={username} placeholder="username" onChange={(e) => validateUser(e.target.value)}/><br></br>
        {!error ? null : <span>{error}</span>}
        ssssss<input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/> <br></br>
        ffffffff<input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/><br></br>
        gggggg <input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/><br></br>
        <input type="submit" />
    </form>

    )}

export default Form;