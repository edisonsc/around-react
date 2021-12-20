import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {

  const [value, setValue] = React.useState('');
  const avatarRef = React.useRef(null);

  function handleChange(e) {
   setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar:  value ,
    });
    setValue('')
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Change profile picture"
      buttonName="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onUpdateAvatar={props.onUpdateAvatar}
    >
      <label htmlFor="link" className="form__label">
        <input
          type="url"
          className="form__input form__input_type_link"
          id="avatarLink"
          name="avatarLink"
          placeholder="Profile image link"
          onChange={handleChange}
          ref={avatarRef}
          value= {value}
          required
        />
        <span className="form__error" id="avatarLink-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
