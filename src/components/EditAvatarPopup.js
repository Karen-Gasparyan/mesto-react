import React, { useState, useEffect, useRef } from 'react';

import PopupWithForm from './PopupWithForm';


function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  buttonTextAvatarPopup
}) {
  
  const avatarLink = useRef();

  const [avatarLinkError, setAvatarLinkError] = useState('');
  const [avatarLinkDirty, setAvatarLinkDirty] = useState(false);
  const [validForm, setValidForm] = useState(false);
  

  useEffect(()=> {
    if(avatarLinkError) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [avatarLinkError])


  function handleChangeLinkInputValue(e) {
    const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value);

    if(!valid) {
      setAvatarLinkError('Введите URL');
      setAvatarLinkDirty(true);
    } else {
      setAvatarLinkError('');
      setAvatarLinkDirty(false);
      setValidForm(true);
    }
  };


  function blurHandler(e) {
    if (!e.target.value) {
      setAvatarLinkError('Поле не может быть пустым');
    }
  };


  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarLink.current.value);

    avatarLink.current.value = '';
  };

  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'change-avatar'}
      buttonText={buttonTextAvatarPopup}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonValidation={validForm} >
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
            onChange={handleChangeLinkInputValue}
            onBlur={blurHandler}
          />
          {(avatarLinkDirty && avatarLinkError) && <span id="linkToAvatar-error" className="error">{avatarLinkError}</span> }
        </div>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;