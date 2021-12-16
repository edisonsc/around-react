import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import Footer from "./Footer";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState({})

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    api.getUser().then((data) => {
      setCurrentUser(data);
    })
    .catch((err) => console.log(`Error: ${err}`));
  }, []);

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

   function handleUpdateUser() {
    api.setUser().then((data) => {
    setCurrentUser(data || '');
    closeAllPopups();  
  })
   .catch((err) => console.log(`Error: ${err}`));
  }

  function onOpen() {
    api.setUser().then((data) => {
    setCurrentUser(data || '');
    closeAllPopups();  
  })
   .catch((err) => console.log(`Error: ${err}`));
  }

  onOpen()

  return (
   
    <div className="root">
       <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <EditProfilePopup 
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups} 
      onUpdateUser={handleUpdateUser}
      />

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
      </CurrentUserContext.Provider>
    </div>
   
  );
}

export default App;
