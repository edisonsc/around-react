function PopupWithForm(props) {
  return (
    <div>
      <section
        className={`popup popup_type_${props.name} ${
          props.isOpen ? "popup_opened" : ""
        }`}
      >
        <div className="popup__container">
          <button
            aria-label="close"
            type="button"
            className="popup__close-button opacity"
            onClick={props.onClose}
          ></button>
          <h2 className="popup__heading">{props.title}</h2>
          <form className="form" name={`${props.name}-form`} noValidate>
            {props.children}
            <button
              type="submit"
              className="form__button opacity"
              id="save-button"
            >
              {props.buttonName}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default PopupWithForm;
