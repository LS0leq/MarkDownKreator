import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './css/create.css';
import 'github-markdown-css'; // 👈 styl Markdown jak na GitHubie

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const blocks = [
    { label: 'Nagłówek 1', content: '# Nagłówek 1\n\n' },
    { label: 'Nagłówek 2', content: '## Nagłówek 2\n\n' },
    { label: 'Nagłówek 3', content: '### Nagłówek 3\n\n' },
    { label: 'Pogrubienie', content: '**Pogrubiony tekst**\n\n' },
    { label: 'Kursywa', content: '*Kursywa*\n\n' },
    { label: 'Pogrubienie + kursywa', content: '***Pogrubiony i pochylony tekst***\n\n' },
    { label: 'Przekreślenie', content: '~~Przekreślony tekst~~\n\n' },
    { label: 'Lista punktowana', content: '- Element 1\n- Element 2\n\n' },
    { label: 'Lista numerowana', content: '1. Element 1\n2. Element 2\n\n' },
    { label: 'Checklist', content: '- [ ] Zadanie do zrobienia\n- [x] Zrobione\n\n' },
    { label: 'Cytat', content: '> To jest cytat\n\n' },
    {
        label: 'Kod blokowy JS',
        content: '```javascript\nconsole.log("Hello World!");\n```\n\n',
    },
    {
        label: 'Kod blokowy Python',
        content: '```python\ndef funkcja():\n    return "Hello"\n```\n\n',
    },
    { label: 'Link', content: '[OpenAI](https://openai.com)\n\n' },
    { label: 'Linia pozioma', content: '---\n\n' },
    { label: 'Komentarz HTML', content: '<!-- Komentarz -->\n\n' },
    { label: 'HTML', content: '<div>To jest HTML</div>\n\n' },
];

const Create = () => {
    const [text, setText] = useState('');
    const previewRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleInsert = (snippet) => {
        setText((prev) => prev + snippet);
    };

    const handleReset = () => setText('');

    const handleSaveAndReload = async () => {
        setIsLoading(true);
        const titleDoc = document.querySelector('.title-input').value;
        try {
            await fetch('https://markdownbackend-qcro.onrender.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: localStorage.getItem('id'),
                    title: titleDoc,
                    content: text,
                }),
            });

            setIsLoading(false);
        } catch (err) {
            console.error('Błąd zapisu:', err);
        }
    };

    const handleExportToPDF = () => {
        const titleDoc = document.querySelector('.title-input').value;
        const element = previewRef.current;
        element.classList.add('static');
        const opt = {
            margin: 0.5,
            filename: titleDoc + '.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        };

        html2pdf()
            .set(opt)
            .from(element)
            .save()
            .then(() => {
                element.classList.remove('static');
            })
            .catch(() => {
                element.classList.remove('static');
            });
    };

    return (
        <div className="create">
            <h1>Edytor Markdown</h1>

            <div className="toolbar">
                {blocks.map((block, index) => (
                    <button key={index} onClick={() => handleInsert(block.content)}>
                        {block.label}
                    </button>
                ))}
            </div>

            <h2>Podaj tytuł dokumentu</h2>
            <input
                type="text"
                placeholder="Tytuł dokumentu"
                className="title-input"
                />

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="editor"
                placeholder="Wprowadź Markdown..."
            />

            <h2>Podgląd (Markdown)</h2>


            <div className="markdown-body preview-display" ref={previewRef}>
                <ReactMarkdown
                    children={text}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={vs}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                />
            </div>

            <div className="button-group">
                <button className="button" onClick={handleReset}>Resetuj</button>
                <button className="button"onClick={handleSaveAndReload}>Zapisz</button>
                <button className="button"onClick={handleExportToPDF}>Eksportuj do PDF</button>
                {isLoading && <div className="spinner"></div>}

            </div>

        </div>
    );
};

export default Create;
