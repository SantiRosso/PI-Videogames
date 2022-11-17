import React, { useEffect, useState } from 'react';
import s from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllVideogames, getRating, getSort } from '../../redux/actions';
import Card from '../Card/Card';
import Aside from '../Aside/Aside';
import Nav from '../Nav/Nav';
import Pagination from '../Pagination/Pagination';

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.filtered);

    useEffect(()=> {
        dispatch(getAllVideogames());
    },[dispatch]);

    //PAGINATION 
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(15);

    let max = Math.ceil(videogames.length / perPage);

    //OrderBy
    const [order, setOrder] = useState(true)

    const handleSort = (e) => {
        dispatch(getSort(e.target.value))
        setOrder(!order)
    }

    const handleRating = (e) => {
        dispatch(getRating(e.target.value))
        setOrder(!order)
    }
    
    return (
        <div className={s.home}>
            <Nav/> 
            {
                videogames.length ?
            
                <div className={s.containerGrid}>
                    <div className={s.grid}>
                    {   
                        // videogames.length ?
                        videogames?.slice((page -1) * perPage, (page -1) * perPage + perPage)
                        .map((e) => {
                            return(
                                <Card key={e.id} id={e.id} name={e.name} img={e.img} genres={e.genres}/>
                            )
                        }) /* : <div className={s.loader}>
                            <img src='https://i.pinimg.com/originals/e1/06/64/e1066408f6758f1da75cfde0ad8823f0.gif' alt='Loading'/>
                        </div> */

                    }
                    </div>
                    <div>
                    <Aside/>
                    <Pagination page={page} setPage={setPage} max={max}/>
                    <div>
                        <select name="Sort" onChange={handleSort}>
                            <option value="sort">Sort</option>
                            <option value="asc">A-Z</option>
                            <option value="des">Z-A</option>
                        </select>
                        <select name="Rating" onChange={handleRating}>
                            <option value="rating">Rating</option>
                            <option value="men">Menor-Mayor</option>
                            <option value="may">Mayor-Menor</option>
                        </select>
                    </div>
                    </div>
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