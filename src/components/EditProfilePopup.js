import React, {useState, useEffect} from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';


function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');

  useEffect(()=> {
    setUserName(currentUser.name);
    setUserDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setUserName(e.target.value);
  };
  function handleChangeDescription(e) {
    setUserDescription(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      userName,
      about: userDescription,
    });
  };

  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'edit'}
      buttonText={'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <div className="pop-up__input-wrapper">
          <input
            name="userName"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
            placeholder="Введите ваше имя"
            type="text"
            className="pop-up__input-text pop-up__input-text_type_name"
            id="userName"
            value={userName}
            onChange={handleChangeName}
          />
          <span id="userName-error" className="error"></span>
        </div>
        <div className="pop-up__input-wrapper">
          <input
            name="userAbout"
            required
            minLength="2"
            maxLength="200"
            autoComplete="off"
            placeholder="Введите вашу специальность"
            type="text"
            className="pop-up__input-text pop-up__input-text_type_about"
            id="userAbout"
            value={userDescription}
            onChange={handleChangeDescription}
          />
          <span id="userAbout-error" className="error"></span>
        </div>
    </PopupWithForm>
  );
};

export default EditProfilePopup;