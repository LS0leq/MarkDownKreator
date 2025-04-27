import React from 'react';
import {Link} from "react-router-dom";
import './css/navbar.css';

const NavBar = () => {

    const handleLogout = () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('post_count');

    }
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/dashboard/stats">Statystyki</Link></li>
                <li><Link to="/dashboard/create">Utwórz plik</Link></li>
                <li><Link to="/dashboard/list">Lista plików</Link></li>
                <li><Link to="/login" onClick={handleLogout}>Wyloguj się</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;