import React, {useState, useEffect} from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import MessagePopup from './MessagePopup';

import CurrentUserContext from '../contexts/CurrentUserContext';
import SpinnerContext from '../contexts/SpinnerContext';
import api from '../utils/api';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isMessagePopup, setIsMessagePopup] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [cardsError, setCardsError] = useState(null);

  const [resetForms, setResetForms] = useState(false);
  const [currentUser, setCurrentUser ] = useState({});
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState('');


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
    })
    .catch(error => handleMessagePopup(`Something went wrong - ${error}`));
  };


  function handleCardDelete(selectedСardID) {
    api.deleteCard(selectedСardID)
      .then(postDeleted => {
        setCards(allCards => allCards.filter(card => card._id !== selectedСardID));
        if(postDeleted) return handleMessagePopup('Пост успешно удален');
      })
      .catch(error => handleMessagePopup(`Something went wrong - ${error}`));
  };


  function handleAddPlaceSubmit(newPlaceData) {
    setLoading(true);

    api.setNewCard(newPlaceData)
      .then(newCard => {
        setCards([newCard, ...cards]);
        setLoading(false);
        closeAllPopups();
      })
      .catch(error => {
        handleMessagePopup(`Something went wrong - ${error}`);
        setLoading(false);
      });
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
    setLoading(true);

    api.setUserAvatar(link)
      .then(newData => {
        setCurrentUser(newData);
        setLoading(false);
        closeAllPopups();
      })
      .catch(error => {
        handleMessagePopup(`Something went wrong - ${error}`);
        setLoading(false);
      });
  };


  function handleUpdateUser({userName, about}) {
    setLoading(true);

    api.setUserInfo(userName, about)
      .then(newData => {
        setCurrentUser(newData);
        setLoading(false);
        closeAllPopups();
      })
      .catch(error => {
        handleMessagePopup(`Something went wrong - ${error}`);
        setLoading(false);
      });
  };
  /* /user info */


  /* popup's */
  const handleEditAvatarClick =()=> {
    setIsEditAvatarPopupOpen(true);
    setResetForms(false);
  };

  const handleEditProfileClick =()=> {
    setIsEditProfilePopupOpen(true);
    setResetForms(false);
  };

  const handleAddPlaceClick =()=> {
    setIsAddPlacePopupOpen(true);
    setResetForms(false);
  };

  const handleMessagePopup =(message)=> {
    setIsMessagePopup(true);
    setMessageText(message);

    const hideMessage =()=> {
      setIsMessagePopup(false);
    }

    setTimeout(hideMessage, 1500);
  }

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
    setLoading(false);
    setResetForms(true);
  };
  /* /popup's */

  return (
    <SpinnerContext.Provider value={loading} >
      <CurrentUserContext.Provider value={currentUser} >
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
              onUpdateAvatar={handleUpdateAvatar}
              loading={loading}
              resetForms={resetForms} />
            
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              loading={loading}
              resetForms={resetForms} /> 

            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
              loading={loading}
              resetForms={resetForms} />

            <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups} />

            <MessagePopup
              title={messageText}
              isOpen={isMessagePopup}/>

            <Footer />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </SpinnerContext.Provider>
  );
};

export default App;