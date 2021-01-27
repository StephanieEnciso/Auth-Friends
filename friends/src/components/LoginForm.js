import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const initialCredentials = {
    username: '',
    password: ''
}

function LoginForm(props) {
    const [credentials, setCredentials] = useState(initialCredentials);
    const { push } = useHistory();

    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const login = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
         .then(res => {
             localStorage.setItem('token', res.data.payload);
             push('/friends');
         })
         .catch(err => {
             console.log(err);
         });
    }


    return (
        <div>
            <form onSubmit = {login}>
                <label>Username:</label>
                <input 
                  type = 'text'
                  name = 'username'
                  value = {credentials.username}
                  onChange = {handleChange}
                />

                <label>Password:</label>
                <input 
                  type = 'password'
                  name = 'password'
                  value = {credentials.password}
                  onChange = {handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    )
};

export default LoginForm;