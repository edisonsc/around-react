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
      <PopupWithForm/>
    </div>
  );
}
export default Main;
