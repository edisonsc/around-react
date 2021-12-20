import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

    return(
        <PopupWithForm
        name="add"
        title="New Place"
        buttonName="Create"
        isOpen={props.isOpen}
        onClose={props.onClose}
      
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
    )
}

export default AddPlacePopup