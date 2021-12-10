function Card (props) {

    function handleClick() {
        props.onCardClick(props.card);
      } 

return(
<div>
<li className="photo-grid__card">
    <button aria-label="delete" type="button" className="photo-grid__delete-icon"></button>
    <img className="photo-grid__image" alt={props.name} src={props.link} onClick={handleClick}/>
    <div className="photo-grid__content">
        <h2 className="photo-grid__title">{props.name}</h2>
        <div className="photo-grid__likes">
        <button aria-label="like" type="button" id="like" className="photo-grid__heart-icon opacity"></button>
        <p className="photo-grid__text">{props.likes}</p>
    </div>
    </div>
</li>
</div>
)
}

export default Card