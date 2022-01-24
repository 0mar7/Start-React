import React from 'react'
import style from './Portfolio.module.css';
import { FaStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import item1 from '../../imgs/1.cabin.png';
import item2 from '../../imgs/2.cake.png';
import item3 from '../../imgs/3.circus.png';
import item4 from '../../imgs/4.game.png';
import item5 from '../../imgs/5.safe.png';
import item6 from '../../imgs/6.submarine.png';


const Portofolio = () => {
    return (

        <div className={`${style.portfolio}`}>

            <div className="container text-center">
                <div className='portfolio-cap'>
                    <h2>Portfolio</h2>

                    <div className={`${style.line}`}>
                        <FaStar className={`fs-1 ${style.ico}`}/>
                    </div>
                </div>

                <div className="row my-4">
                    <div className="col-md-6 col-lg-4">
                        <div className={`${style.item}`}>
                            <img className='w-100' src={item1} />
                            <div className={`${style.overlay}`}>
                                <FaPlus className={`${style.icon}`} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`${style.item}`}>
                            <img className='w-100' src={item2} />
                            <div className={`${style.overlay}`}>
                                <FaPlus className={`${style.icon}`} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`${style.item}`}>
                            <img className='w-100' src={item3} />
                            <div className={`${style.overlay}`}>
                                <FaPlus className={`${style.icon}`} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`${style.item}`}>
                            <img className='w-100' src={item4} />
                            <div className={`${style.overlay}`}>
                                <FaPlus className={`${style.icon}`} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`${style.item}`}>
                            <img className='w-100' src={item5} />
                            <div className={`${style.overlay}`}>
                                <FaPlus className={`${style.icon}`} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`${style.item}`}>
                            <img className='w-100' src={item6} />
                            <div className={`${style.overlay}`}>
                                <FaPlus className={`${style.icon}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portofolio;
