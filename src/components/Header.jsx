import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

const Header = () => {
    return(
        <header>
            <h1>Kreator MarkDown Online</h1>
            <nav>
                <ul>
                    <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/login">Konto</Link></li>
                    <li><Link to="/about">O twórcy</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;