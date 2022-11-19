import React, { useEffect } from 'react';
import s from './Create.module.css';
import Nav from '../Nav/Nav';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres } from '../../redux/actions';

const Create = () => {

    const genres = useSelector((state) => state.genres)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getGenres())
    },[dispatch])

    const [form, setForm] = useState({
        name: '',
        released: '',
        description: '',
        genres: [],
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
        axios.post("http://localhost:3001/videogames", form) 
        alert('Game created!')
    }

    function handleSelect (e) {
        if(e.target.value !== 'genres')
        setForm({
            ...form,
            genres: [...form.genres, e.target.value]
        })
    }

    function handleDelete (event) {
        setForm({
            ...form,
            genres: form.genres.filter(e => e !== event.target.value)
        })
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
                    <label>Genres: </label>
                    <select name='genres' onChange={handleSelect}>
                        <option value='genres'>Genres</option>
                        {genres?.map((e) => {return(<option>{e.name}</option>)})}
                    </select>
                    <div>
                        {
                        form.genres?.map((e) => {
                            return(
                                <span className={s.genre}>{e}<button value={e} onClick={handleDelete} className={s.btnx}>X</button></span>
                            )
                        })
                        }
                    </div>
                    <button type='submit' className={s.boton}>Create</button>
                </form>
            </div>
            
        </div>
    )
}

export default Create;