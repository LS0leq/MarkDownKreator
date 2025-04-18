import React from 'react';
import './css/stats.css';

const Stats = () => {

    return (
        <>
            <div className="stats" >
                <h1>Cześć {localStorage.getItem('name')}!</h1>
                <p>Tutaj masz podsumowanie swoich dokumentów</p>

            </div>
        </>
    );
};

export default Stats;