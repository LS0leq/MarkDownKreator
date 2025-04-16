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
                <p>Twój nowy, intuicyjny kreator plików Markdown — szybki, prosty, i wygodny sposób na tworzenie
                    profesjonalnych dokumentów bez zbędnego kodowania. Twórz, edytuj i udostępniaj swoje pliki w
                    popularnym formacie MD bez wysiłku. Niezależnie od tego, czy piszesz dokumentację, bloga, czy
                    notatki, nasz kreator to idealne narzędzie dla Ciebie!</p>
                <Link to="/login"><span class="text">Zaloguj się <img src={iconLogin}/> </span></Link>
            </div>
            <img src={logo} alt="Hero Image" id="logoHero"/>
        </div>
    );
};

export default Hero;