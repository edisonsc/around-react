function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_${props.card.name} ${
        props.card ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__container_type_preview">
        <button
          aria-label="close"
          type="button"
          className="popup__close-button popup__close-button_type_preview opacity"
          onClick={props.onClose}
        ></button>
        <img
          src={props.card.link}
          alt={props.card.name}
          className="popup__image"
        />
        <h2 className="popup__caption">{props.card.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;
