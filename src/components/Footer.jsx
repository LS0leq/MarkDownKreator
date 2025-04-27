import React from 'react';
import './css/footer.css';
import {Link} from "react-router-dom";
import logo from './img/logob.PNG'
const Footer = () => {
    return(
        <footer>
            <div>
                <ul>
                    <li>&copy; 2025 LS Oleq <img src={logo}/> </li>
                </ul>
            </div>

            <div>
                <h1>Nawigacja</h1>
                <ul>
                    <li><Link to="/about">O mnie</Link></li>
                    <li><Link to="/privacy">Polityka prywatności</Link></li>
                    <li><a target="_blank" href="https://github.com/LS0leq/MarkDownKreator/blob/main/README.md">Dokumentacja (GitHub)</a></li>
                </ul>
            </div>

            <div>
                <h1>Kontakt</h1>
                <ul>
                    <li>lsoleqbiznes@gmail.com</li>
                    <li><a target="_blank" href="https://lsoleq.pl/">Strona internetowa</a></li>
                    <li><a target="_blank" href="https://github.com/LS0leq">GitHub</a></li>
                </ul>
            </div>

        </footer>
    );
};

export default Footer;