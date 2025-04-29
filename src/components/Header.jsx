import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <h1>Kreator MarkDown Online</h1>
            <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                {menuOpen ? '✕' : '☰'}
            </button>
            <nav className={menuOpen ? 'open' : ''}>
                <ul>
                    <li><Link to="/" onClick={closeMenu}>Strona główna</Link></li>
                    <li><Link to="/login" onClick={closeMenu}>Konto</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>O twórcy</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
