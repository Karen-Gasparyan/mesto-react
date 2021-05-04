import React, {useState} from 'react';

import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick =()=> {
    setIsEditAvatarPopupOpen('pop-up_opened');
  }

  const handleEditProfileClick =()=> {
    setIsEditProfilePopupOpen('pop-up_opened');
  }

  const handleAddPlaceClick =()=> {
    setIsAddPlacePopupOpen('pop-up_opened');
  }

  const handleCardClick =(name, link)=> {
    setSelectedCard({
      clazz: 'pop-up_opened',
      name,
      link
    });
  }

  const closeAllPopups =()=> {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="body">
      <div className="page">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick} />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups} />

        <PopupWithForm
          title={'Обновить аватар'}
          name={'change-avatar'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          >
            <div className="pop-up__input-wrapper">
              <input
                name="linkToAvatar"
                required
                autoComplete="off"
                placeholder="Ссылка на картинку"
                type="url"
                className="pop-up__input-text pop-up__input-text_type_link"
                id="linkToAvatar"
              />
              <span id="linkToAvatar-error" className="error"></span>
            </div>
            <button type="submit" className="pop-up__save-btn">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm
          title={'Редактировать профиль'}
          name={'edit'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          >
            <div className="pop-up__input-wrapper">
              <input
                name="name"
                required
                minLength="2"
                maxLength="40"
                autoComplete="off"
                placeholder="Введите ваше имя"
                type="text"
                className="pop-up__input-text pop-up__input-text_type_name"
                id="userName"
              />
              <span id="userName-error" className="error"></span>
            </div>
            <div className="pop-up__input-wrapper">
              <input
                name="about"
                required
                minLength="2"
                maxLength="200"
                autoComplete="off"
                placeholder="Введите вашу специальность"
                type="text"
                className="pop-up__input-text pop-up__input-text_type_about"
                id="userAbout"
              />
              <span id="userAbout-error" className="error"></span>
            </div>
            <button type="submit" className="pop-up__save-btn">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm
          title={'Новое место'}
          name={'img'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          >
            <div className="pop-up__input-wrapper">
              <input
                name="name"
                required
                minLength="2"
                maxLength="30"
                autoComplete="off"
                placeholder="Название"
                type="text"
                className="pop-up__input-text pop-up__input-text_type_title"
                id="placeName"
              />
              <span id="placeName-error" className="error"></span>
            </div>
            <div className="pop-up__input-wrapper">
              <input
                name="link"
                required
                autoComplete="off"
                placeholder="Ссылка на картинку"
                type="url"
                className="pop-up__input-text pop-up__input-text_type_link"
                id="linkToImage"
              />
              <span id="linkToImage-error" className="error"></span>
            </div>
            <button type="submit" className="pop-up__save-btn">Создать</button>
        </PopupWithForm>

        <Footer />
    </div>
  </div>
  );
}

export default App;