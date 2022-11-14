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
                    genres?.map((e) => {
                        return(
                            <button className={s.genre} value={e.name} onClick={handleClick}>{e.name}</button>
                        )
                    })
                }
            </div>
            <div>
                <button onClick={handleClickSwitch} value='api'>Api</button>
                <button onClick={handleClickSwitch} value='db'>DB</button>
            </div>
            <div>
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Aside;