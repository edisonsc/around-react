function PopupWithForm(props) {

    
  return (
    <div>

<section className={`popup popup_type_${props.name}`}>  {/*Changes based on popup*/}
        <div className="popup__container">
          <button
            aria-label="close"
            type="button"
            className="popup__close-button opacity"
          ></button>
          <h2 className="popup__heading">{props.children}</h2>
          <form className="form" name={`${props.name}-form`} noValidate>
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
            </label>
            <button
              type="submit"
              className="form__button opacity"
              id="save-button"
            >
              Save
            </button>
          </form>
        </div>
      </section>


      <section className={`popup popup_type_${props.name}`}>  {/*className="popup popup_type_edit"*/}
        <div className="popup__container">
          <button
            aria-label="close"
            type="button"
            className="popup__close-button opacity"
          ></button>
          <h2 className="popup__heading">Edit profile</h2>
          <form className="form" name="editInformation" noValidate>
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
            </label>
            <button
              type="submit"
              className="form__button opacity"
              id="save-button"
            >
              Save
            </button>
          </form>
        </div>
      </section>

      <section className={`popup popup_type_add`}>  {/*popup_type_add*/}
        <div className="popup__container">
          <button
            aria-label="close"
            type="button"
            className="popup__close-button opacity"
          ></button>
          <h2 className="popup__heading">New Place</h2>
          <form className="form" name="editPlace" id="editPlace" noValidate>
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
            <button
              type="submit"
              className="form__button form__button_disabled opacity"
              id="create-button"
              disabled
            >
              Create
            </button>
          </form>
        </div>
      </section>

      <section className={`popup popup_type_${props.name}`}>  {/*popup_type_avatar*/}
        <div className="popup__container popup__container_type_avatar">
          <button
            aria-label="close"
            type="button"
            className="popup__close-button opacity"
          ></button>
          <h2 className="popup__heading">Change profile picture</h2>
          <form className="form" name="changeProfilePicture" noValidate>
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
            <button
              type="submit"
              className="form__button opacity"
              id="avatar-save-button"
            >
              Save
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_delete">
        <div className="popup__container popup__container_type_delete">
          <button
            aria-label="close"
            type="button"
            className="popup__close-button opacity"
          ></button>
          <h2 className="popup__heading">Are you sure?</h2>
          <form className="form" name="confirmDelete" noValidate>
            <input
              type="hidden"
              className="form__input form__input_type_card-id"
              id="id"
              name="id"
            />
            <button
              type="submit"
              className="form__button opacity"
              id="delete-save-button"
            >
              Yes
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default PopupWithForm;
