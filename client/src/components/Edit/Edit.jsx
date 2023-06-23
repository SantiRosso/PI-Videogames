import React, { useEffect } from "react";
import s from "./Edit.module.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms } from "../../redux/actions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { showMessage } from "../../showMessage";


const Edit = () => {

    const genres = useSelector((state) => state.genres)
    const dispatch = useDispatch();
    const platf = useSelector((state) => state.platforms)
    const gameId = useParams().id   
    const navigate = useNavigate()

    useEffect(()=> {
        if(!window.localStorage.getItem("token")){
            navigate("/videogames")
            showMessage("Login or register", "error")
        }
        if(!genres.length){
            dispatch(getGenres())  
        }
        if(!platf.length){
            dispatch(getPlatforms())
        }
        axios.get(`/videogame/${gameId}`)
        .then(response => setForm(response.data))
    },[dispatch, gameId])

    const [form, setForm] = useState({
        name: "",
        released: "",
        description: "",
        genres: [],
        platforms: [],
        img: "",
        rating: null,
    });

    console.log(form)

    function handleChange (e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = (form) => {
        let errors = {};
        if (form.name?.length < 2) {
            errors.name = "-Game Name must have at least 2 characters";
        }
        if (form.description?.length < 15) {
            errors.description = "-Description must have at least 15 characters";
        }
        if (form.rating && (form.rating < 1 || form.rating > 5)) {
            errors.rating = "-Rating must be between 1 and 5";
        } 
        if (form.rating && isNaN(form.rating)) {
            errors.rating = "-Rating must be a number";
        }
        if (form.genres?.length < 1) {
            errors.genres = "-Genres is required";
        }
        if (form.platforms?.length < 1) {
            errors.platforms = "-Platforms is required";
        }
        return errors;
    }   

    const errorMsg = validate(form);

    async function handleSubmit (e) {
        e.preventDefault()
        if(Object.values(errorMsg).length){
            return showMessage(Object.values(errorMsg).join('\n'), "error");
        }

        try {
            await axios.put(`/videogame/${gameId}`, form)
            showMessage("Game edited!", "success")
            navigate("/videogames")
            setTimeout(()=>{
                window.location.reload()
            }, 1000)
        } catch (error) {
            showMessage("This name is already used.", "error")
        }
    }

    function handleSelectG (e) {
        if(e.target.value !== "genres" && !form.genres?.includes(e.target.value))
            if(form.genres){
                setForm({
                ...form,
                genres: [...form.genres, e.target.value]
                
            })
        }
    }
    
    function handleSelectP (e) {
        if(e.target.value !== "platforms" && !form.platforms?.includes(e.target.value))
            if(form.platforms){
            setForm({
                ...form,
                platforms: [...form.platforms, e.target.value]
            }) 
        }
    }

    function handleDeleteG (event) {
        event.preventDefault()
        setForm({
            ...form,
            genres: form.genres?.filter(e => e !== event.target.value)
        })
    }
    
    function handleDeleteP (event) {
        event.preventDefault()
        setForm({
            ...form,
            platforms: form.platforms?.filter(e => e !== event.target.value)
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
                <h1>EDIT GAME</h1>
            </div>
            <div className={s.div}>
                <form onSubmit={handleSubmit} className={s.form}>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={handleChange} className={s.input} autoComplete='off' defaultValue={form?.name} required></input>
                    <p>{errorMsg.name}</p>
                    <label>Released: </label>
                    <input type="text" name="released" onChange={handleChange} className={s.input} autoComplete='off' placeholder='dd/mm/yy' defaultValue={form?.released} required></input>                    
                    <label>Description: </label>
                    <input type="text" name="description" onChange={handleChange} className={s.input} autoComplete='off' defaultValue={form?.description} required></input>
                    <p>{errorMsg.description}</p>
                    <label>Rating: </label>
                    <input type="text" name="rating" onChange={handleChange} className={s.input} autoComplete='off' placeholder='1-5' defaultValue={form?.rating} required></input>
                    <p>{errorMsg.rating}</p>
                    <label>Image: </label>
                    <input type="text" name="img" onChange={handleChange} className={s.input} autoComplete='off' placeholder='url...' defaultValue={form?.img} required></input>                  
                    <label>Genres: </label>
                    <select name="genres" onChange={handleSelectG} className={s.select}>
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
                    <select name="platforms" onChange={handleSelectP} className={s.select}>
                        <option value="platforms">Platforms</option>
                        {platf?.map((e, i) => {return(<option key={i}>{e.name}</option>)})}
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
                    <button type="submit" className={s.boton} /* disabled={Object.values(errorMsg).length} */>Confirme</button>
                </form>
            </div>
        </div>
    )
}

export default Edit;