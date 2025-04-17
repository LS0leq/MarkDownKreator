import React from 'react';
import './css/hero.css';
import logo from './img/logo.jpg'
import iconLogin from './svg/login.svg'
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div>
                <h1>Utwórz szybko pliki MarkDown!</h1>
                <p><b>Twórz. Edytuj. Publikuj. </b>
                     Nowy sposób na szybkie pisanie dokumentów Markdown – bez kodowania, bez kompromisów.</p>
                <Link to="/login"><span class="text">Zaloguj się <img src={iconLogin}/> </span></Link>
            </div>
            <img src={logo} alt="Hero Image" id="logoHero"/>
        </div>
    );
};

export default Hero;