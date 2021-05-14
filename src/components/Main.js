import React, {useState, useEffect} from 'react';

import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/api';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick
})
{
  const [cards, setCards] = useState([]);
  const [cardsError, setCardsError] = useState(null);

  const currentUser = React.useContext(CurrentUserContext);
  const {name, about, avatar} = currentUser;

  useEffect(()=> {
    api.getInitialCards()
      .then(data => setCards(data))
      .catch(error => setCardsError(`${error} - Something went wrong`));
  }, []);

  return (
    <div className="content page__content">
      <section className="profile content__profile">
        <div className="profile__wrapper">
          <div className="profile__avatar-wrapper">
            <img
              src={avatar}
              alt="Аватар"
              className="profile__avatar" />
            <div
              className="profile__edit-avatar"
              onClick={onEditAvatar}>
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="Кнопка - редактировать профиль"
              onClick={onEditProfile}
            ></button>
            <p className="profile__subtitile">{about}</p>
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
        aria-label="Карточки, с фотографиями мест" >
          {cardsError || cards.map(({_id, ...otherValues})=>
            (<Card key={_id} {...otherValues} onCardClick={onCardClick} />)
          )}
      </section>
    </div>
  );
};

export default Main;