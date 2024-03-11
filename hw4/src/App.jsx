import React, { useState } from 'react';
import CatCard from './components/CatCard';
import CatHistory from './components/CatHistory';
import Bans from './components/Bans';

import './App.css';

function App() {
    const [bannedCats, setBannedCats] = useState([]);
    const [catHistory, setCatHistory] = useState([]);

    const handleBan = (cat) => {
        setBannedCats([...bannedCats, cat]);
    };

    const handleShuffle = (cat) => {
        setCatHistory([...catHistory, cat]);
    };

    const handleFavorite = (cat) => {
        setFavoriteCats([...favoriteCats, cat]);
    };

    return (
        <div className="App">
            <div className="cat-history-container">
                <CatHistory catHistory={catHistory} />
            </div>
            <div className="cat-card-container">
                <CatCard onBan={handleBan} onShuffle={handleShuffle} onFavorite={handleFavorite} />
            </div>
            <div className="bans-container">
                <Bans bannedCats={bannedCats} />
            </div>
            
        </div>
    );
}

export default App;
