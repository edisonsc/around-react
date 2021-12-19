import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props);
  }

  function handleLikeClick () {
    props.onCardLike(props);
  }

  function handleDeleteClick() {
    props.onCardDelete(props)
  }

  // Checking if the current user is the owner of the current card
  const isOwn = props.card.owner === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `photo-grid__delete-icon ${
    isOwn ? "photo-grid__delete-icon_visible" : "photo-grid__delete-icon_hidden"
  }`;

//   // Check if the card was liked by the current user
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

// Create a variable which you then set in `className` for the like button
 const cardLikeButtonClassName = `opacity photo-grid__heart-icon ${
  isLiked ? "photo-grid__heart-icon_active" : "photo-grid__heart-icon"
 }`; 


  return (
    <div>
      <li className="photo-grid__card">
        <button
          aria-label="delete"
          type="button"
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
        ></button>
        <img
          className="photo-grid__image"
          alt={props.name}
          src={props.link}
          onClick={handleClick}
        />
        <div className="photo-grid__content">
          <h2 className="photo-grid__title">{props.name}</h2>
          <div className="photo-grid__likes">
            <button
              aria-label="like"
              type="button"
              id="like"
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
            ></button>
            <p className="photo-grid__text">{props.likes.length}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;
