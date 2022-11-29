import React, { useEffect } from "react";
import s from "./Create.module.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions";
import { Link } from "react-router-dom";

const Create = () => {

    const genres = useSelector((state) => state.genres)
    const dispatch = useDispatch();
    const platf = ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox One', 'Xbox Series S/X', 'Nintendo Switch', 'iOS', 'Android', 'Nintendo 3DS', 'Nintendo DS', 'Nintendo DSi', 'macOS', 'Linux', 'Xbox 360', 'Xbox', 'PlayStation 3', 'PlayStation 2', 'PlayStation', 'PS Vita', 'PSP', 'Wii U', 'Wii', 'GameCube', 'Nintendo 64', 'Game Boy Advance', 'Game Boy Color', 'Game Boy', 'SNES', 'NES', 'Classic Macintosh', 'Apple II', 'Commodore / Amiga', 'Atari 7800', 'Atari 5200', 'Atari 2600', 'Atari Flashback', 'Atari 8-bit', 'Atari ST', 'Atari Lynx', 'Atari XEGS', 'Genesis', 'SEGA Saturn', 'SEGA CD', 'SEGA 32X', 'SEGA Master System', 'Dreamcast', '3DO', 'Jaguar', 'Game Gear', 'Neo Geo', 'Web'];

    useEffect(()=> {
        dispatch(getGenres())
    },[dispatch])

    const [form, setForm] = useState({
        name: "",
        released: "",
        description: "",
        genres: [],
        platforms: [],
        img: "",
        rating: 0,
    });

    function handleChange (e) {
        setForm({
            ...form,
             [e.target.name]: e.target.value
         })
    }

    const validate = (form) => {
        let errors = {};
        if (form.name.length < 2) {
            errors.name = "-Game Name must have at least 2 characters";
        }
        if (form.description.length < 15) {
            errors.description = "-Description must have at least 15 characters";
        }
        if (form.rating < 1 || form.rating > 5) {
            errors.rating = "-Rating must be between 1 and 5";
        }
        if (isNaN(form.rating)) {
            errors.rating = "-Rating must be a number";
        }
        if (form.genres.length < 1) {
            errors.genres = "-Genres is required";
        }
        if (form.platforms.length < 1) {
            errors.platforms = "-Platforms is required";
        }
        return errors;
    }   

    const errorMsg = validate(form);

    async function handleSubmit (e) {
        e.preventDefault()
        if(Object.values(errorMsg).length){
            return alert(Object.values(errorMsg).join('\n'));
        }
        
        let errorAlert = await axios.post("http://localhost:3001/videogames", form) 
        
        if(errorAlert.data.message === "error"){
            alert("This name is already used.")
        } else {
            window.location.reload()
            alert("Game created!") 
        } 
    }

    function handleSelectG (e) {
        if(e.target.value !== "genres" && !form.genres.includes(e.target.value))
        setForm({
            ...form,
            genres: [...form.genres, e.target.value]
        })
    }
    
    function handleSelectP (e) {
        if(e.target.value !== "platforms" && !form.platforms.includes(e.target.value))
        setForm({
            ...form,
            platforms: [...form.platforms, e.target.value]
        })
    }

    function handleDeleteG (event) {
        event.preventDefault()
        setForm({
            ...form,
            genres: form.genres.filter(e => e !== event.target.value)
        })
    }
    
    function handleDeleteP (event) {
        event.preventDefault()
        setForm({
            ...form,
            platforms: form.platforms.filter(e => e !== event.target.value)
        })
    }

    return (
        <div className={s.container}>
            <div className={s.nav}>
                <Link to="/videogames">
                <h1 className={s.home}>Videogames</h1>
                </Link>
            </div>
            <div className={s.div1}>
                <h1>Create</h1>
            </div>
            <div className={s.div}>
                <form onSubmit={handleSubmit} className={s.form}>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={handleChange} className={s.input} autoComplete='off' required></input>
                    <p>{errorMsg.name}</p>
                    <label>Released: </label>
                    <input type="text" name="released" onChange={handleChange} className={s.input} autoComplete='off' placeholder='dd/mm/yy' required></input>                    
                    <label>Description: </label>
                    <input type="text" name="description" onChange={handleChange} className={s.input} autoComplete='off' required></input>
                    <p>{errorMsg.description}</p>
                    <label>Rating: </label>
                    <input type="text" name="rating" onChange={handleChange} className={s.input} autoComplete='off' placeholder='1-5' required></input>
                    <p>{errorMsg.rating}</p>
                    <label>Image: </label>
                    <input type="text" name="img" onChange={handleChange} className={s.input} autoComplete='off' placeholder='url...' required></input>
                    
                    <label>Genres: </label>
                    <select name="genres" onChange={handleSelectG}>
                        <option value="genres">Genres</option>
                        {genres?.map((e, i) => {return(<option key={i}>{e.name}</option>)})}
                    </select>
                    <div>
                        {
                        form.genres?.map((e, i) => {
                            return(
                                <span key={i} className={s.genrePlatf}>{e}<button value={e} onClick={handleDeleteG} className={s.btnx}>X</button></span>
                            )
                        })
                        }
                    </div>
                    <p>{errorMsg.genres}</p> 
                    <label>Platforms: </label>
                    <select name="platforms" onChange={handleSelectP}>
                        <option value="platforms">Platforms</option>
                        {platf?.map((e, i) => {return(<option key={i}>{e}</option>)})}
                    </select>
                    <div>
                        {
                        form.platforms?.map((e, i) => {
                            return(
                                <span key={i} className={s.genrePlatf}>{e}<button value={e} onClick={handleDeleteP} className={s.btnx}>X</button></span>
                            )
                        })
                        }
                    </div>
                    <p>{errorMsg.platforms}</p> 
                    <button type="submit" className={s.boton} /* disabled={errorMsg} */>Create</button>
                </form>
            </div>
        </div>
    )
}

export default Create;