import React from 'react';
import img from '../../../../Asset/WhatsApp Image 2024-03-09 at 12.14.32 PM-modified.png';
import "./Hero.css";
import Lottie from "lottie-react";
import hero from '../../../../Asset/hero.json'


const Hero = () => {
    return <>

        <div className='hero py-5'>
            <div className="row">
                <div className="col-md-7">
                    <div>
                        <img src={img} alt="" className='mb-4' />
                        <h1>I'm Muhmmad Ataa Alshishtawi</h1>
                        <p>UI/UX Designer And Frontend Development.</p>

                        <div className="social d-flex gap-4 mt-4">
                           
                            <a href="https://github.com/Mhmd-Ataa"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/muhammad-ataa-62b52823a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                <Lottie loop={true} animationData={hero} style={{ height: 360 }} />

                </div>
            </div>



        </div>

    </>
}



export default Hero;