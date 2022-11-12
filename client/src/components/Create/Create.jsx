import React from 'react';
import s from './Create.module.css';
import Nav from '../Nav/Nav';
import { useState } from 'react';
import axios from 'axios';

const Create = () => {

    const [form, setForm] = useState({
        name: '',
        released: '',
        description: '',
        genres: '',
        platforms: '',
        img: '',
        rating: 0,
    });

    function handleChange (e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit (e) {
        e.preventDefault();
        axios.post("http://localhost:3001/videogames", form)
    }

    return (
        <div className={s.container}>
            <Nav/>
            <div className={s.div}>
                <h1>Create</h1>
            </div>
            <div className={s.div}>
                <form onSubmit={handleSubmit} className={s.form}>
                    <label>Name: </label>
                    <input type='text' name='name' onChange={handleChange} className={s.input} required></input>
                    <label>Released: </label>
                    <input type='text' name='released' onChange={handleChange} className={s.input} required></input>
                    <label>Platforms: </label>
                    <input type='text' name='platforms' onChange={handleChange} className={s.input} required></input>
                    <label>Description: </label>
                    <input type='text' name='description' onChange={handleChange} className={s.input} required></input>
                    <label>Rating: </label>
                    <input type='text' name='rating' onChange={handleChange} className={s.input} required></input>
                    <label>Image: </label>
                    <input type='text' name='img' onChange={handleChange} className={s.input} required></input>
                    <button type='submit' className={s.boton}>Create</button>
                    <label>Genres: </label>
                    <input type='text' name='genres' onChange={handleChange} className={s.input} required></input>
                </form>
            </div>
            
        </div>
    )
}

export default Create;