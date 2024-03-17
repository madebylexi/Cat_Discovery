import React, { useState, useEffect } from 'react';

function CatCard({ onBan, onShuffle, onFavorite }) {
    const [cat, setCat] = useState(null);

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {
                'x-api-key': 'live_Tut3UbJatjdXm7fqTBy0QElZROBWh5JtBcruJdVX8htiIIqcXHTFAs6IeMbFJZMM'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data && data[0] && data[0].breeds && data[0].breeds.length > 0) {
                setCat(data[0]);
            } else {
                // If the API response doesn't include breed information, fetch again
                handleShuffle();
            }
        })
        .catch(error => {
            console.error('Error fetching cat data:', error);
        });
    }, []);

    const handleBan = (value, type) => {

        onBan({ type, value });
    };

    const handleShuffle = () => {
        fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {
                'x-api-key': 'live_Tut3UbJatjdXm7fqTBy0QElZROBWh5JtBcruJdVX8htiIIqcXHTFAs6IeMbFJZMM'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data && data[0] && data[0].breeds && data[0].breeds.length > 0) {
                setCat(data[0]);
                onShuffle({ breed: data[0].breeds[0].name, url: data[0].url });
            } else {
                // If the API response doesn't include breed information, fetch again
                handleShuffle();
            }
        })
        .catch(error => {
            console.error('Error fetching cat data:', error);
        });
    };

    const handleFavorite = () => {
        if (cat) {
            onFavorite(cat);
        }
    };

    return (
        <div className="cat-card">
            <div className="cat-discovery-header">Cat Discovery</div>
            {cat && (
                <>
                    <img src={cat.url} alt="Cat" style={{ width: '300px', height: '300px' }} />
                    {cat.breeds.length > 0 && (
                        <>
                            <h2>{cat.breeds[0].name}</h2>
                            <p>Origin: {cat.breeds[0].origin}</p>
                            <p>Life Span: {cat.breeds[0].life_span}</p>
                            <p>Temperament: {cat.breeds[0].temperament}</p>
                            <button onClick={() => handleBan(cat.breeds[0].name, 'breed')}>Ban Breed</button>
                            <button onClick={() => handleBan(cat.breeds[0].origin, 'origin')}>Ban Origin</button>
                            <button onClick={() => handleBan(cat.breeds[0].life_span, 'life_span')}>Ban Life Span</button>
                            <button onClick={() => handleBan(cat.breeds[0].temperament, 'temperament')}>Ban Temperament</button>
                        </>
                    )}
                    <button onClick={handleShuffle}>Shuffle</button>
                </>
            )}
        </div>
    );
}

export default CatCard;
