import React from 'react';
import { FaStar } from 'react-icons/fa'
import style from './Contact.module.css';

const Contact = () => {
    return (

        <div className="container py-5">
            <div className={`${style.contact} text-center `}>
                <h1>Contact Me</h1>
                <div className={`${style.line}`}>
                    <FaStar className={`fs-1 ${style.icon}`} />
                </div>
            </div>
            
            <div className={`${style.contactForm}`}>
                <div className={`${style.myInput}`}> 
                    <input type="text" placeholder='Name' />
                </div>

                <div className={`${style.myInput}`}>
                    <input type="text" placeholder='Email Address' />
                </div>

                <div className={`${style.myInput}`}>
                    <input type="tel" placeholder='Phone Number' />
                </div>

                <div className={`${style.myInput}`}>
                    <textarea type="text" placeholder='Message' />
                </div>

                <button className={`${style.button}`}>Submit</button>
            </div>

        </div>

    );
};

export default Contact;

