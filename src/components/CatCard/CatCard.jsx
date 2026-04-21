import './CatCard.css'

const CatCard = ({nom, cat, otherCat, handleClick}) => {
    return (
        <div className="catCard">
            <img
                src={cat.url}
                alt={nom}
                title={nom}
                className="catCard-image"
            />
            <button onClick={(e) => handleClick(e, cat.id, otherCat.id)} className="catCard-button">J'aime</button>
        </div>
    )
}

export default CatCard;