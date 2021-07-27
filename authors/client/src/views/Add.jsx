import React, { useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import Form from '../components/Form';

const Add = props =>{
    const [myForm, setMyform] = useState({
        name:""
    }) 
    const [errors, setErrors] = useState({});
    const onChangeHandler = e => {
        setMyform({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", myForm)
            .then(res => {
                if(res.data.err) {
                    console.log("There were errors!");
                    setErrors(res.data.err.errors)
                } else {
                    console.log("It worked!!");
                    navigate("/");
                }
            })
            .catch(err => console.log("Something went wrong with the post request!", err))
    }
    return(
        <>
        <Link to="/">Home</Link>
        <h1>Favourite authors</h1>
        <div className="col-4 container">
        <Form handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors}/>
        </div>
        </>
    )
}

export default Add