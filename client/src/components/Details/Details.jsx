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
            <h1 className={s.title}>Details</h1>
            <h2>{videogameDetail.name}</h2>
            <div className={s.grid}>
                <img src={videogameDetail.img} alt={videogameDetail.name} className={s.img}/>                           
                <div className={s.subGrid}>
                    <div>
                        <h2>Platorms: </h2>
                        {videogameDetail.platforms?.map((e) => {
                            return(
                                <h4 className={s.info}>{e}</h4>
                                )
                            })}
                    </div>
                    <div>
                        <h2>Genres: </h2>
                        {videogameDetail.genres?.map((e) => {
                            return(
                                <h4 className={s.info}>{e}</h4>
                                )
                            })}
                    </div>
                    <h2>Rating: <span className={s.info}>{videogameDetail.rating}</span></h2>
                    <h2>Released: <span className={s.info}>{videogameDetail.released}</span></h2>
                </div>
            </div>
            <h2>Description: </h2>
            <h4 className={s.info2}>{videogameDetail.description?.split('<p>')
            .join('\n')
            .split('</p>')
            .join(' ')
            .split('<br />')
            .join('\n')
            }</h4> 
        </div>
    )
}

export default Details;