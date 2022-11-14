import React, { useEffect, useState } from 'react';
import s from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllVideogames } from '../../redux/actions';
import Card from '../Card/Card';
import Aside from '../Aside/Aside';
import Nav from '../Nav/Nav';

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.filtered);

    useEffect(()=> {
        dispatch(getAllVideogames());
    },[dispatch]);
    
    return (
        <div className={s.home}>
            <Nav/> 
            {
                videogames.length ?
            
                <div className={s.containerGrid}>
                    <div className={s.grid}>
                    {   
                        // videogames.length ?
                        videogames?.map((e) => {
                            return(
                                <Card key={e.id} id={e.id} name={e.name} img={e.img} genres={e.genres}/>
                            )
                        }) /* : <div className={s.loader}>
                            <img src='https://i.pinimg.com/originals/e1/06/64/e1066408f6758f1da75cfde0ad8823f0.gif' alt='Loading'/>
                        </div> */

                    }
                    </div>
                    <Aside/>
                </div>

                : <div className={s.loader}>
                    <div>
                        <img 
                        className={s.loader} 
                        src='https://i.pinimg.com/originals/e1/06/64/e1066408f6758f1da75cfde0ad8823f0.gif' 
                        alt='Loading'
                        />
                    </div>
                </div>

            }
            
        </div>
    )
}

export default Home;