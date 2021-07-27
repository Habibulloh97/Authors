import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const Edit = props=>{
    const [myForm, setMyForm] = useState({})
    const [errors, setErrors] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then(res => setMyForm(res.data))
            .catch(err => console.log(err))
    }, [])
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props._id}`, myForm)
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
        <h1>Favourite authors</h1>
        <Form handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors}/>
        </>
    )
}

export default Edit