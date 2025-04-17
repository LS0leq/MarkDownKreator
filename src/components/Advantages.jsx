import React from 'react';
import './css/advantages.css';

const Advantages = () => {
    const advantages = [
        {
            title: 'Intuicyjny interfejs',
            description: 'Łatwy w obsłudze interfejs, który pozwala szybko tworzyć pliki Markdown.',
        },
        {
            title: 'Szybkość działania',
            description: 'Twórz i edytuj dokumenty w mgnieniu oka dzięki zoptymalizowanemu narzędziu.',
        },
        {
            title: 'Profesjonalne wyniki',
            description: 'Twórz dokumenty o wysokiej jakości bez potrzeby znajomości kodowania.',
        },
    ];

    return (
        <div className="advantages">
            <ul>
                {advantages.map((advantage, index) => (
                    <li key={index} className="advantage-item">
                        <h1>{index +1}</h1>
                        <h3>{advantage.title}</h3>
                        <p>{advantage.description}</p>
                        <img src={require(`./svg/${index}.svg`)} alt={`Advantage ${index}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Advantages;