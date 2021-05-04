import React, {useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick
}) {

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);
  
  useEffect(()=> {
    api.getUserInfo()
      .then(({name, about, avatar})=> {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
      });
  }, []);

  useEffect(()=> {
    api.getInitialCards()
      .then(data => setCards(data));
  }, []);

  return (
    <div className="content page__content">
      <section className="profile content__profile">
        <div className="profile__wrapper">
          <div className="profile__avatar-wrapper">
            <img
              src={userAvatar}
              alt="Аватар"
              className="profile__avatar" />
            <div
              className="profile__edit-avatar"
              onClick={onEditAvatar}>
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="Кнопка - редактировать профиль"
              onClick={onEditProfile}
            ></button>
            <p className="profile__subtitile">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Кнопка - добавить карточку с изображением места"
          onClick={onAddPlace}>
        </button>
      </section>
      <section
        className="elements content__elements"
        aria-label="Карточки, с фотографиями мест">
          {cards.map(({_id, ...otherValues})=> <Card key={_id} {...otherValues} onCardClick={onCardClick} />)}
      </section>
    </div>
  );
};

export default Main;