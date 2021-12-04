import profileImage from "../images/profile-image-jacques.jpg";
import PopupWithForm from "./PopupWithForm";

function Main() {
  const handleEditAvatarClick = () => {
    document.querySelector(".popup_type_avatar").classList.add("popup_opened");
  };
  const handleEditProfileClick = () => {
    document.querySelector(".popup_type_edit").classList.add("popup_opened");
  };
  const handleAddPlaceClick = () => {
    document.querySelector(".popup_type_add").classList.add("popup_opened");
  };
  return (
    <div>
      <main>
        <section className="profile">
          <div className="profile__area">
            <button
              type="button"
              aria-label="avatar"
              className="button profile__avatar-button"
              onClick={handleEditAvatarClick}
            >
              <img
                src={profileImage}
                alt="Jacques Cousteau"
                className="profile__image"
              />
            </button>
            <div className="profile__name-area">
              <h1 className="profile__name">Sarah</h1>
              <button
                aria-label="edit"
                type="button"
                className="button profile__edit-button opacity"
                onClick={handleEditProfileClick}
              ></button>
              <p className="profile__title">Developer</p>
            </div>
          </div>
          <button
            aria-label="add"
            type="button"
            className="button profile__add-button opacity"
            onClick={handleAddPlaceClick}
          ></button>
        </section>
        <section className="images">
          <ul className="photo-grid"></ul>
        </section>
      </main>
      <PopupWithForm name="edit" title="Edit profile" buttonName="Save">
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
      <span className="form__error" id="name-error"></span>
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
      <span className="form__error" id="about-error"></span>
    </label></PopupWithForm>
    

    <PopupWithForm name="add" title="New Place" buttonName="Create">
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
              <span className="form__error" id="place-name-error"></span>
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
              <span className="form__error" id="link-error"></span>
            </label>
      </PopupWithForm>
    
      <PopupWithForm name="avatar" title="Change profile picture" buttonName="Save">
      <label htmlFor="link" className="form__label">
              <input
                type="url"
                className="form__input form__input_type_link"
                id="avatarLink"
                name="avatarLink"
                placeholder="Profile image link"
                required
              />
              <span className="form__error" id="avatarLink-error"></span>
            </label>
      </PopupWithForm>

      <PopupWithForm name="delete"title="Are you sure?" buttonName="Yes">
      <input
              type="hidden"
              className="form__input form__input_type_card-id"
              id="id"
              name="id"
            />
      </PopupWithForm>
    </div>
  );
}
export default Main;
