import React from 'react';
import './css/information.css';

const Information = () => {
    return (
        <div className="information">
            <h2>Stworzony do szybkiego i dokładnego tworzenia plików Markdown!</h2>
            <div>
                <p>
                    <strong>Kreator MarkDown Online</strong> to nowoczesne, lekkie narzędzie stworzone z myślą o twórcach treści, developerach oraz wszystkich,
                    którzy chcą szybko i wygodnie tworzyć profesjonalnie wyglądające dokumenty w formacie Markdown.
                    Dzięki przejrzystemu interfejsowi i intuicyjnym funkcjom możesz rozpocząć edycję w ciągu kilku sekund —
                    bez potrzeby konfiguracji, instalacji dodatkowych wtyczek czy znajomości składni.
                </p>

                <p>
                    <strong>Najważniejsze funkcje aplikacji:</strong>
                    <ul>
                        <li>⚡ Natychmiastowy podgląd tworzonego dokumentu w czasie rzeczywistym</li>
                        <li>📁 Możliwość zapisu i ponownego otwierania plików Markdown</li>
                        <li>🎯 Czysty i minimalistyczny design skoncentrowany na pisaniu</li>
                        <li>💾 Eksport gotowego pliku jednym kliknięciem</li>
                        {/*<li>🌙 Tryb ciemny – idealny do pracy wieczorami</li>*/}
                    </ul>
                </p>

                <p>
                    Mój projekt jest idealny zarówno dla osób, które dopiero zaczynają przygodę z tworzeniem dokumentów Markdown,
                    jak i dla tych, którzy używają go na co dzień. Dzięki mojej aplikacji możesz skupić się na treści,
                    a nie na technikaliach. Wystarczy otworzyć, napisać i zapisać – tak prosto, jak to tylko możliwe.
                    <br /><br />
                    Zacznij pisać lepiej, szybciej i bardziej przejrzyście!
                </p>
            </div>
        </div>
    );
};

export default Information;
