import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

   function handleTitleChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: name,
      link: link,
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
}, [props.isOpen]);


  return (
    <PopupWithForm
      name="add"
      title="New Place"
      buttonName="Create"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onAddPlace={props.onAddPlace}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleTitleChange}
        />
        <span className="form__error" id="place-name-error" />
      </label>
      <label htmlFor="link" className="form__label">
        <input
          type="url"
          className="form__input form__input_type_link"
          id="link"
          name="link"
          placeholder="Image link"
          required
          value={link}
          onChange={handleLinkChange}
        />
        <span className="form__error" id="link-error" />
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
