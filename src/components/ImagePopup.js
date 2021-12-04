function ImagePopup() {
  return (
    <div className="popup popup_type_preview">
      <div className="popup__container popup__container_type_preview">
        <button
          aria-label="close"
          type="button"
          className="popup__close-button popup__close-button_type_preview opacity"
        ></button>
        <img src="#" alt="#" className="popup__image" />
        <h2 className="popup__caption"></h2>
      </div>
    </div>
  );
}
export default ImagePopup;
