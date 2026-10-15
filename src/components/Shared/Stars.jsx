
function Stars({ rating }) {
    return (
        <ul className="list-inline">
            <li className="list-inline-item">
                {[1, 2, 3, 4, 5].map((n) => (
                    <i
                        key={n}
                        className={`fa fa-star ${n <= rating ? "selected" : ""}`}
                    ></i>
                ))}
            </li>
            <li className="list-inline-item">{rating}/5</li>
        </ul>
    )
}

export default Stars