import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByGenre, getGenres, getGamesDbOrApi } from '../../redux/actions';
import s from './Aside.module.css'; 

const Aside = () => {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    

    useEffect(() => {
        dispatch(getGenres())
    },[dispatch])

    function handleClickSwitch(e) {
        dispatch(getGamesDbOrApi(e.target.value))
    }

    function handleClick(e) {
        dispatch(getByGenre(e.target.value))
    }

    return(
        <div>
            <h1 className={s.container}>Aside</h1>
            <div className={s.genres}>
                {
                    genres?.map((e,i) => {
                        return(
                            <button key={i} className={s.genre} value={e.name} onClick={handleClick}>{e.name}</button>                           
                        )
                    })
                }
            </div>
            <div className={s.divApidb}>
                <button onClick={handleClickSwitch} className={s.apidb} value='api'>Games API</button>
                <button onClick={handleClickSwitch} className={s.apidb} value='db'>Created games</button>
            </div>
        </div>
    )
}

export default Aside;