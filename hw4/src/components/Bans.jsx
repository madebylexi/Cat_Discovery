function Bans({ bannedCats }) {
    return (
        <div className="ban-list">
            <h2>Ban List</h2>
            <ul>
                {bannedCats.map((cat, index) => (
                    <li key={index}>
                        <p>{cat.type}: {cat.value}</p>
                        <img src={cat.url} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Bans;