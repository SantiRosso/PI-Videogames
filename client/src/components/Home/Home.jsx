import React, { useEffect } from 'react';
import s from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllVideogames } from '../../redux/actions';
import Card from '../Card/Card';
import Aside from '../Aside/Aside';
import Nav from '../Nav/Nav';

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);

    useEffect(()=> {
        dispatch(getAllVideogames());
    },[dispatch]);
    
    return (
        <div className={s.home}>
            <Nav/> 
            <div className={s.containerGrid}>
                <div className={s.grid}>
                {
                    videogames?.map((e) => {
                        return(
                            <Card key={e.id} id={e.id} name={e.name} img={e.img} genres={e.genres}/>
                        )
                    })
                }
                </div>
                <Aside/>
            </div>
            
        </div>
    )
}

export default Home;