import React from 'react';
import './css/about.css';

const AboutComp = () => {
    return (
        <div className="about-container">
            <h1>O mnie</h1>
            <p>
                Nazywam się Olek, jestem uczniem Zespołu Szkół Łączności w Gdańsku.
                Od najmłodszych lat interesuję się programowaniem i tworzeniem rozwiązań, które ułatwiają codzienną pracę z technologią.
            </p>
            <p>
                Jednym z moich największych osiągnięć jest zdobycie drugiego miejsca w ogólnopolskim konkursie <strong>Primus Inter Pares</strong>,
                co zmotywowało mnie do dalszego rozwijania swoich pasji.
            </p>
            <p>
                Pomysł na stworzenie kreatora Markdown → PDF narodził się, gdy zacząłem odczuwać irytację związaną z korzystaniem z pośredników takich jak edytory
                kodu (np. Visual Studio Code) z dodatkowymi pluginami.
            </p>
            <p>
                Stworzyłem więc własne, niezależne narzędzie — prosty, przejrzysty kreator, który umożliwia tworzenie i eksport dokumentów w formacie Markdown
                bez zbędnych komplikacji. Projekt jest nadal w fazie rozwoju.
            </p>
            <p>
                Na chwilę obecną aplikacja została zaprojektowana głównie z myślą o urządzeniach desktopowych. Wersja mobilna znajduje się w planach,
                jednak obecnie jej używanie nie jest jeszcze zalecane.
            </p>
            <p>
                Poza programowaniem tworzę również grafiki. Więcej szczegółowych informacji na mój temat znajdziesz na mojej stronie:
                <br />
                <a href="https://lsoleq.pl" target="_blank" rel="noopener noreferrer">
                    https://lsoleq.pl
                </a>
            </p>
        </div>
    );
};

export default AboutComp;
