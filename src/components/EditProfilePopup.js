import React from 'react';
import {useEffect, useState, useContext} from 'react';
import PopupWithForm from "./PopupWithForm";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

// Subscription to the context
const currentUser = React.useContext(CurrentUserContext);

const [name, setName] = React.useState('');
const [description, setDescription] = React.useState('')

// After loading the current user from the API
// their data will be used in managed components.
React.useEffect(() => {
  if(currentUser){
  setName(currentUser.name);
  setDescription(currentUser.about);
  }
}, [currentUser, props.isOpen]);


function handleNameChange(e){
    setName(e.target.value);
}

function handleDescriptionChange(e){
setDescription(e.target.value)
}

function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();
  
    // Pass the values of the managed components to the external handler
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

return(
<PopupWithForm
        name="edit"
        title="Edit profile"
        buttonName="Save"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        onUpdateUser={props.onUpdateUser}
      >
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
            value={name || ''}
            onChange={handleNameChange}
          />
          <span className="form__error" id="name-error"/>
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
            value={description || ''}
            onChange={handleDescriptionChange}
          />
          <span className="form__error" id="about-error"/>
        </label>
      </PopupWithForm>
)
}

export default EditProfilePopup