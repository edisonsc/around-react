import profileImage from '../images/profile-image-jacques.jpg'

function Main () {
return ( 

<div>
   <main>
        <section className="profile">
            <div className="profile__area">
               <button type="button" aria-label="avatar" className="button profile__avatar-button">
                 <img src={profileImage} alt="Jacques Cousteau" className="profile__image"/></button>
                <div className="profile__name-area">
                    <h1 className="profile__name">Sarah</h1>
                    <button aria-label="edit" type="button" className="button profile__edit-button opacity"></button>
                    <p className="profile__title">Developer</p>
                </div>
            </div>
            <button aria-label="add" type="button" className="button profile__add-button opacity"></button>
        </section>
        <section className="images">
            <ul className="photo-grid">
            </ul>
        </section>
        <section className="popup popup_type_edit">
            <div className="popup__container">
                <button aria-label="close" type="button" className="popup__close-button opacity"></button>
                <h2 className="popup__heading">Edit profile</h2>
                <form className="form" name="editInformation" noValidate>
                    <label htmlFor="name" className="form__label">
                    <input type="text" className="form__input form__input_type_name" id="name" name="name"
                        placeholder="Name" minLength="2" maxLength="40" required/>
                        <span className="form__error" id="name-error"></span>
                    </label>
                    <label htmlFor="about" className="form__label">
                    <input type="text" className="form__input form__input_type_title" id="about" name="about"
                        placeholder="About me" minLength="2" maxLength="200" required/>
                        <span className="form__error" id="about-error"></span>
                    </label>
                    <button type="submit" className="form__button opacity" id="save-button">Save</button>
                </form>
            </div>
        </section>
        <section className="popup popup_type_add">
            <div className="popup__container">
                <button aria-label="close" type="button" className="popup__close-button opacity"></button>
                <h2 className="popup__heading">New Place</h2>
                <form className="form" name="editPlace" id="editPlace" noValidate>
                    <label htmlFor="name" className="form__label">
                    <input type="text" className="form__input form__input_type_place" id="place-name" name="name"
                        placeholder="Title" minLength="1" maxLength="30" required/>
                        <span className="form__error" id="place-name-error"></span>
                    </label>
                    <label htmlFor="link" className="form__label">
                    <input type="url" className="form__input form__input_type_link" id="link" name="link"
                        placeholder="Image link" required/>
                        <span className="form__error" id="link-error"></span>    
                    </label> 
                    <button type="submit" className="form__button form__button_disabled opacity" id="create-button" disabled>Create</button>
                </form>
                
            </div>
        </section>
        <div className="popup popup_type_preview">
            <div className="popup__container popup__container_type_preview">
                <button aria-label="close" type="button"
                    className="popup__close-button popup__close-button_type_preview opacity"></button>
                <img src="#" alt="#" className="popup__image"/>
                <h2 className="popup__caption"></h2>
            </div>
        </div>
        <section className="popup popup_type_avatar">
            <div className="popup__container popup__container_type_avatar">
                <button aria-label="close" type="button" className="popup__close-button opacity"></button>
                <h2 className="popup__heading">Change profile picture</h2>
                <form className="form" name="changeProfilePicture" noValidate>
                    <label htmlFor="link" className="form__label">
                        <input type="url" className="form__input form__input_type_link" id="avatarLink" name="avatarLink"
                            placeholder="Profile image link" required/>
                            <span className="form__error" id="avatarLink-error"></span>    
                        </label> 
                    <button type="submit" className="form__button opacity" id="avatar-save-button">Save</button>
                </form>
            </div>
        </section>
        <section className="popup popup_type_delete">
            <div className="popup__container popup__container_type_delete">
                <button aria-label="close" type="button" className="popup__close-button opacity"></button>
                <h2 className="popup__heading">Are you sure?</h2>
                <form className="form" name="confirmDelete" noValidate>
                    <input type="hidden" className="form__input form__input_type_card-id" id="id" name="id"/>
                    <button type="submit" className="form__button opacity" id="delete-save-button">Yes</button>
                </form>
            </div>
        </section>
    </main>
</div>
    )

}
export default Main 