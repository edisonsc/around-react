import {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    
  const [selectedCard, setSelectedCard] = useState('');

  return (
    <div className="root">
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
  
  }

export default App;


// onEditProfileClick, onAddPlaceClick, onEditAvatarClick, onCardClick

// isEditProfilePopupOpen
// isAddPlacePopupOpen
// isEditAvatarPopupOpen

// closeAllPopups()