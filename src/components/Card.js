import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext);

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick () {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card)
  }

  // Checking if the current user is the owner of the current card
  const isOwn = card.owner._id === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `photo-grid__delete-icon ${
    isOwn ? "photo-grid__delete-icon_visible" : "photo-grid__delete-icon_hidden"
  }`;

//   // Check if the card was liked by the current user
  const isLiked = card.likes.some(i => i._id === currentUser._id);

// Create a variable which you then set in `className` for the like button
 const cardLikeButtonClassName = `opacity photo-grid__heart-icon ${
  isLiked ? "photo-grid__heart-icon_active" : "photo-grid__heart-icon_disabled"
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
          alt={card.name}
          src={card.link}
          onClick={handleClick}
        />
        <div className="photo-grid__content">
          <h2 className="photo-grid__title">{card.name}</h2>
          <div className="photo-grid__likes">
            <button
              aria-label="like"
              type="button"
              id="like"
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
            ></button>
            <p className="photo-grid__text">{card.likes.length}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;
