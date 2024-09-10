import React from "react";
import './Navbar.scss';
import Logo from './assets/ListadoBebeLogo.png';

const Navbar = () => {
    return(
        <>
        <nav>
            <div className="LOGO"><img src={Logo} alt="" /></div>
            <div className="BUTTONS">
                <a href="#">INICIO</a>
                <a href="#">PLATAFORMA</a>
                <a href="#">QUEM SOMOS?</a>
                <a className="BTN-CONHEÇA" href="#">CONHEÇA</a>
            </div>
        </nav>
        </>
    );
};

export default Navbar;