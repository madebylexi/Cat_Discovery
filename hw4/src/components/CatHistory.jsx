function CatHistory({ catHistory }) {
    return (
        <div className="cat-history">
            <h2>Cat History</h2>
            <ul>
                {catHistory.map((cat) => (
                    <li key={cat.id}>
                        <p>{cat.breed}</p>
                        <img src={cat.url} alt="Past Cat" className="history-image" />
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default CatHistory;