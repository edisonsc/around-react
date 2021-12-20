import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(
          data.map((item) => ({
            name: item.name,
            link: item.link,
            likes: item.likes,
            id: item._id,
            owner: item.owner._id,
          }))
        );
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.card.likes.some((i) => i._id === currentUser._id);
    // Send a request to the API and getting the updated card data

    api.addLike(card.card.id, !isLiked).then((newCard) => {
      setCards((state) =>
        state.map((c) => (c._id === card.card.id ? newCard : c))
      );
    });
  }
  function handleCardDelete(card) {
    api.deleteCard(card.card.id).then((deletedCard) =>{
      setCards((state) => 
      state.filter((c) => (c._id === deletedCard.id)))
    });
  }

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
                alt="Jacques Cousteau"
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
            {cards.map((card) => (
              <Card
                name={card.name}
                link={card.link}
                key={card.id}
                likes={card.likes}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Main;
