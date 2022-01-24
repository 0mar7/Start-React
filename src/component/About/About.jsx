import React from 'react';
import style from './About.module.css';
import { FaStar } from 'react-icons/fa';

const About = () => {
    return (

        <section className={`${style.about}`}>

            <div className='container'>

                <div className='about-cap'>
                    <h1>About</h1>
                    <div className={`${style.line} my-3`}>
                        <FaStar className={`fs-1 ${style.icon}`} />
                    </div>
                    <div className="mx-auto w-75 pt-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>
                                    Freelancer is a free bootstrap theme created by Start
                                    Bootstrap. The download includes the complete source files
                                    including HTML, CSS, and JavaScript as well as optional SASS
                                    stylesheets for easy customization.
                                </p>
                            </div>

                            <div className="col-lg-6">
                                <p>
                                    You can create your own custom avatar for the masthead,
                                    change the icon in the dividers, and add your email address
                                    to the contact form to make it fully functional!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default About;
