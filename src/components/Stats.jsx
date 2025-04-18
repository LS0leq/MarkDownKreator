import React, { useEffect, useState } from 'react';
import './css/stats.css';

const Stats = () => {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('id');

        if (!userId) {
            setError("Brak ID użytkownika.");
            return;
        }

        fetch(`https://markdownbackend-qcro.onrender.com/posts/user_summary/${userId}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Błąd podczas pobierania danych');
                }
                return res.json();
            })
            .then(data => {
                setStats(data);
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setError("Wystąpił błąd przy pobieraniu danych.");
            });
    }, []);

    return (
        <div className="stats">
            <h1>Cześć {localStorage.getItem('name')}!</h1>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {stats ? (
                <div className="statsDiv">
                    <p>Liczba postów: {stats.total_posts}</p>
                    {stats.last_post ? (
                        <>
                            <p><strong>Tytuł:</strong> {stats.last_post.title}</p>
                            <p><strong>Data:</strong> {new Date(stats.last_post.created_at).toLocaleString()}</p>
                        </>
                    ) : (
                        <p>Brak postów.</p>
                    )}
                </div>
            ) : (
                !error && <p>Ładowanie statystyk...</p>
            )}
        </div>
    );
};

export default Stats;
