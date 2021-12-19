import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
 
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    api.getInitialCards().then((data) => {
      console.log(data)
      setCards(
        data.map((item, id) => ({
          name: item.name,
          link: item.link,
          likes: item.likes.length,
          id: item._id,
          owner: item.owner._id,
          key: item.id
  
        }))
      );
    })
    .catch((err) => console.log(`Error: ${err}`));
  }, []);

 

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
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Main;
