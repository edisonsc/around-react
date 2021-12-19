import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card(card) {
  const currentUser = useContext(CurrentUserContext);

  function handleClick() {
    card.onCardClick(card);
    console.log(card)
  }

  // Checking if the current user is the owner of the current card
  const isOwn = card.owner === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `photo-grid__delete-icon ${
    isOwn ? "photo-grid__delete-icon_visible" : "photo-grid__delete-icon_hidden"
  }`;

  // Check if the card was liked by the current user
// const isLiked = card.likes.some(i => i.id === currentUser._id);

// Create a variable which you then set in `className` for the like button
const cardLikeButtonClassName = `...`; 

  return (
    <div>
      <li className="photo-grid__card">
        <button
          aria-label="delete"
          type="button"
          className={cardDeleteButtonClassName}
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
              className="photo-grid__heart-icon opacity"
            ></button>
            <p className="photo-grid__text">{card.likes}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;
