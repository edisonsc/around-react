import { useEffect, useState } from "react";
// import profileImage from "../images/profile-image-jacques.jpg";
import Card from "./Card";
import api from "../utils/api";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err) => console.log(`Error: ${err}`));
  }, []);

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(
        data.map((item) => ({
          name: item.name,
          link: item.link,
          likes: item.likes.length,
          id: item._id,
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
                src={userAvatar}
                alt="Jacques Cousteau"
                className="profile__image"
              />
            </button>
            <div className="profile__name-area">
              <h1 className="profile__name">{userName}</h1>
              <button
                aria-label="edit"
                type="button"
                className="button profile__edit-button opacity"
                onClick={props.onEditProfileClick}
              ></button>
              <p className="profile__title">{userDescription}</p>
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
