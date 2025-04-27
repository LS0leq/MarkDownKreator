import React, { useState, useEffect, useRef } from 'react';
import './css/list.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import html2pdf from "html2pdf.js";

const List = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const refs = useRef({});

    const userId = localStorage.getItem('id');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`https://markdownbackend-qcro.onrender.com/posts/all/${userId}`);
                if (!response.ok) throw new Error('Nie udało się pobrać postów');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [userId]);

    const handleDelete = async (postId) => {
        try {
            const response = await fetch(`https://markdownbackend-qcro.onrender.com/posts/${postId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) throw new Error('Nie udało się usunąć posta');

            setPosts(posts.filter(post => post.id !== postId));
            alert('Post został usunięty!');
        } catch (error) {
            alert(error.message);
        }
    };

    const handleDownload = (postId, title) => {
        const element = refs.current[postId];
        if (!element) return;

        const opt = {
            margin: 0.5,
            filename: `${title}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        };

        html2pdf().set(opt).from(element).save();
    };

    if (loading) return <div>Ładowanie...</div>;
    if (error) return <div>Błąd: {error}</div>;

    return (
        <div className="list">
            <h1>Lista postów</h1>
            {posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <div ref={(el) => (refs.current[post.id] = el)}>
                                <h3>Tytuł: {post.title}</h3>
                                <SyntaxHighlighter language="markdown" style={vs}>
                                    {post.content}
                                </SyntaxHighlighter>
                                <p><strong>Data utworzenia:</strong> {new Date(post.created_at).toLocaleString()}</p>
                            </div>
                            <div className="button-group">
                                <button className="button" onClick={() => handleDownload(post.id, post.title)}>Pobierz</button>
                                <button className="button" onClick={() => handleDelete(post.id)}>Usuń</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Brak postów do wyświetlenia</p>
            )}
        </div>
    );
};

export default List;
