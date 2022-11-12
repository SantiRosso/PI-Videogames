import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Details.module.css';
import Nav from '../Nav/Nav';
import { getDetail } from '../../redux/actions';

const Details = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.id;

    const videogameDetail = useSelector(state => state.videogameDetail)
    console.log(videogameDetail)

    useEffect(() => {
        dispatch(getDetail(id))
    },[dispatch, id])
    
    return (
        <div className={s.container}>
            <Nav/> 
            <h1>Details</h1>
            <h4>Name: {videogameDetail.name}</h4>
            <img src={videogameDetail.img} alt={videogameDetail.name} className={s.img}/>
            <h4>Description: {videogameDetail.description}</h4>
            <h4>Released: {videogameDetail.released}</h4>
            <h4>Rating: {videogameDetail.rating}</h4>
            <div><h4>Platorms: </h4>{videogameDetail.platforms?.map((e) => {
                return(
                    <h4>{e}</h4>
                )
            })}</div>
            <div><h4>Genres: </h4>{videogameDetail.genres?.map((e) => {
                return(
                    <h4>{e}</h4>
                )
            })}</div>
        </div>
    )
}

export default Details;