import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';

// interact w/ google's passport

// continue as guest option w/ local storage // add disclamer alert?

function Login(){

    function validate(inputs){
        // API Call
        console.log(inputs);
    }
    function formObject(e){
        const inputs = {
            email: $("#email").val(),
            password: $("#password").val()
        }
        validate(inputs);
        e.preventDefault();
    }
    return (<>
        <form>
            <label>E-mail: </label>
            <input id='email' typeof='email' />
            <label>Password: </label>
            <input id='password' />
            <button><Link onClick={(e) => formObject(e)} to="/">Login</Link> </button>
            <button><Link to="/newuser">New User</Link></button> 
        </form>

        {/* <button>Continue As Guest</button> */}
    </>)
}

export default Login

// or can set up as a state-component w/ inputs being saved dynamically as typed & validate on submit-click