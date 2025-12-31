import React from 'react';
import "./Footer.css"

const Footer = () => {
    return <div className="  mt-5 footer">
        <div className="row justify-content-center">
            <div className="col-md-4 first ">
                <p>dedicated to creating impactful solutions</p>
            </div>
            <div className="col-md-4  text-center">
                <p>Copyright@2024</p>
            </div>
            <div className="col-md-2  icons">
                <div className="social d-flex gap-5  pb-2">
                   
                    <a href="https://github.com/Mhmd-Ataa"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/muhammad-ataa-62b52823a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>

    </div>;
}



export default Footer;