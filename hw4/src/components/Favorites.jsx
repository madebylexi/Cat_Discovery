import React from 'react';

function Favorites({ favoriteCats }) {
    return (
        <div className="favorites-container">
            <h2>Favorites</h2>
            <ul>
                {favoriteCats.map((cat, index) => (
                    <li key={index}>
                        <p>{cat.breed}</p>
                        <div className="favorite-image-container">
                            <img src={cat.url} alt="Favorite Cat" className="favorite-image" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favorites;
