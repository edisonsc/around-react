function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div
      className={`popup popup_type_${card.name} ${isOpen && "popup_opened"}`}
    >
      <div className="popup__container popup__container_type_preview">
        <button
          aria-label="close"
          type="button"
          className="popup__close-button popup__close-button_type_preview opacity"
          onClick={onClose}
        ></button>
        <img src={card.link} alt={card.name} className="popup__image" />
        <h2 className="popup__caption">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
