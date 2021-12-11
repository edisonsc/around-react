import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState({})

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(clickedCard) {
    setSelectedCard(clickedCard);
    setIsImagePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name="edit"
        title="Edit profile"
        buttonName="Save"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor="name" className="form__label">
          <input
            type="text"
            className="form__input form__input_type_name"
            id="name"
            name="name"
            placeholder="Name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="form__error" id="name-error"/>
        </label>
        <label htmlFor="about" className="form__label">
          <input
            type="text"
            className="form__input form__input_type_title"
            id="about"
            name="about"
            placeholder="About me"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="form__error" id="about-error"/>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="New Place"
        buttonName="Create"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor="name" className="form__label">
          <input
            type="text"
            className="form__input form__input_type_place"
            id="place-name"
            name="name"
            placeholder="Title"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="form__error" id="place-name-error"/>
        </label>
        <label htmlFor="link" className="form__label">
          <input
            type="url"
            className="form__input form__input_type_link"
            id="link"
            name="link"
            placeholder="Image link"
            required
          />
          <span className="form__error" id="link-error"/>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Change profile picture"
        buttonName="Save"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor="link" className="form__label">
          <input
            type="url"
            className="form__input form__input_type_link"
            id="avatarLink"
            name="avatarLink"
            placeholder="Profile image link"
            required
          />
          <span className="form__error" id="avatarLink-error"/>
        </label>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Are you sure?" buttonName="Yes">
        <input
          type="hidden"
          className="form__input form__input_type_card-id"
          id="id"
          name="id"
        />
      </PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />

      <Footer />
    </div>
  );
}

export default App;
