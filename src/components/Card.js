function Card (card) {

return(
<div>
<li className="photo-grid__card">
    <button aria-label="delete" type="button" className="photo-grid__delete-icon"></button>
    <img className="photo-grid__image" alt={card.name} src={card.link}/>
    <div className="photo-grid__content">
        <h2 className="photo-grid__title">{card.name}</h2>
        <div className="photo-grid__likes">
        <button aria-label="like" type="button" id="like" className="photo-grid__heart-icon opacity"></button>
        <p className="photo-grid__text">{card.likes}</p>
    </div>
    </div>
</li>
</div>
)
}

export default Card