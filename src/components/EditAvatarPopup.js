import React, { useRef } from 'react';

import PopupWithForm from './PopupWithForm';


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, buttonTextAvatarPopup}) {

  const avatarLink = useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar(avatarLink.current.value);
  };

  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'change-avatar'}
      buttonText={buttonTextAvatarPopup}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
        <div className="pop-up__input-wrapper">
          <input
            name="linkToAvatar"
            ref={avatarLink}
            required
            autoComplete="off"
            placeholder="Ссылка на картинку"
            type="url"
            className="pop-up__input-text pop-up__input-text_type_link"
            id="linkToAvatar"
          />
          <span id="linkToAvatar-error" className="error"></span>
        </div>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;