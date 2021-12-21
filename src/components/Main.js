import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div>
      <main>
        <section className="profile">
          <div className="profile__area">
            <button
              type="button"
              aria-label="avatar"
              className="button profile__avatar-button"
              onClick={props.onEditAvatarClick}
            >
              <img
                src={currentUser.avatar}
                alt={`avatar of ${currentUser.name}`}
                className="profile__image"
              />
            </button>
            <div className="profile__name-area">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                aria-label="edit"
                type="button"
                className="button profile__edit-button opacity"
                onClick={props.onEditProfileClick}
              ></button>
              <p className="profile__title">{currentUser.about}</p>
            </div>
          </div>
          <button
            aria-label="add"
            type="button"
            className="button profile__add-button opacity"
            onClick={props.onAddPlaceClick}
          ></button>
        </section>

        <section className="images">
          <ul className="photo-grid">
            {props.cards.map((card, _id) => (
              <Card
                name={card.name}
                link={card.link}
                owner={card.owner}
                _id={card._id}
                likes={card.likes}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                key={card._id}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Main;
