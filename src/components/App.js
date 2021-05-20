import React, {useState, useEffect} from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';

import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/api';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser ] = useState({});
  const [cards, setCards] = useState([]);
  const [cardsError, setCardsError] = useState(null);


  /* cards */
  useEffect(()=> {
    api.getInitialCards()
      .then(data => setCards(data))
      .catch(error => setCardsError(`${error} - Something went wrong`));
  }, []);

  function handleCardLike(selectedСardLikes, selectedСardID) {
    const isLiked = selectedСardLikes.some(otherUsers => otherUsers._id === currentUser._id);
    
    api.changeLike(selectedСardID, !isLiked)
      .then(selectedСard => {
        setCards(allCards => allCards.map(card => card._id === selectedСardID ? selectedСard : card));
    });
  };

  function handleCardDelete(selectedСardID) {
    api.deleteCard(selectedСardID)
      .then(({message}) => {
        setCards(allCards => allCards.filter(card => card._id !== selectedСardID));
        console.log(message);
      })
  };

  function handleAddPlaceSubmit(newPlaceData) {
    api.setNewCard(newPlaceData)
      .then(newCard => {
        setCards([newCard, ...cards]);
      });

    closeAllPopups();
  };
  /* /cards */


  /* user info */
  useEffect(()=> {
    api.getUserInfo()
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch(error => {
        setCurrentUser({
          name: error,
          about: 'Something went wrong',
          avatar: 'https://www.wpfixit.com/wp-content/uploads/2019/03/HTTP-error-when-uploading-images-in-WordPress.jpg'
        })
      });
  }, []);

  function handleUpdateAvatar(link) {

    api.setUserAvatar(link)
      .then(newData => {
        setCurrentUser(newData);
      });

    closeAllPopups();
  };

  function handleUpdateUser({userName, about}) {

    api.setUserInfo(userName, about)
      .then(newData => {
        setCurrentUser(newData);
      });

    closeAllPopups();
  };
  /* /user info */


  /* popup's */
  const handleEditAvatarClick =()=> {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick =()=> {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick =()=> {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick =(name, link)=> {
    setSelectedCard({
      isOpen: true,
      name,
      link
    });
  };

  const closeAllPopups =()=> {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };
  /* /popup's */


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />

          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick} 
            cards={cards}
            cardsError={cardsError}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete} />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} />
          
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser} /> 

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit} />

          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups} />

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;