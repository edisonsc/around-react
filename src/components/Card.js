function Card (props) {

return(
    <div>
<template id="cardTemplate" className = "card-template">
<li className="photo-grid__card">
    <button aria-label="delete" type="button" className="photo-grid__delete-icon"></button>
    <img className="photo-grid__image" alt="" src={props.link}/>
    <div className="photo-grid__content">
        <h2 className="photo-grid__title">{props.name}</h2>
        <div className="photo-grid__likes">
        <button aria-label="like" type="button" id="like" className="photo-grid__heart-icon opacity"></button>
        <p className="photo-grid__text">{props.name}</p>
    </div>
    </div>
</li>
</template> 
</div>
)
}

export default Card