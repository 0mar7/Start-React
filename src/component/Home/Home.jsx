import React from 'react';
import style from './Home.module.css';
import avatar from '../../imgs/avatar.svg';
import { FaStar } from 'react-icons/fa';


const Home = () => {
    return (
        <header className={`${style.home}`}>

            <div className={`${style.homeContainer}`}>
                <div className='home-img mt-5'>
                    <img className={style.homeImg} src={avatar} alt="" />
                </div>


                <div className='home-cap'>
                    <h1>Start React</h1>
                    <div className={`${style.line} my-3`}>
                        <FaStar className={`fs-1 ${style.icon}`}/>
                    </div>
                    <h2 className='h4 fw-bold text-white'>Graphic Artist - Web Designer - llustrator</h2>
                    
                </div>
            </div>
        </header>
    )
}

export default Home;
