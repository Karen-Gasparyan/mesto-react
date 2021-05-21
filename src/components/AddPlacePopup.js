import React, { useState } from 'react';

import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace, buttonTextPlacePopup}) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangePlaceTitle(e) {
    setName(e.target.value);
  };
  function handleChangePlaceLink(e) {
    setLink(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({name, link});
  }

  return (
    <PopupWithForm
      title={'Новое место'}
      name={'img'}
      buttonText={buttonTextPlacePopup}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
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
            onChange={handleChangePlaceTitle}
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
            onChange={handleChangePlaceLink}
          />
          <span id="linkToImage-error" className="error"></span>
        </div>
    </PopupWithForm>
  );
};

export default AddPlacePopup;