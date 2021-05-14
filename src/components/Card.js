import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';


function Card({name, link, likes, owner, onCardClick}) {
  
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__deleted ${isOwn ? 'element__deleted_active' : ''}`
  );

  const handleClick =()=> {
    onCardClick(name, link);
  } 

  return (
    <article className="element">
      <img
        src={link}
        alt={name}
        onError={(e)=> e.target.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'}
        className="element__image"
        onClick={handleClick} />
      <button
        type="button"
        aria-label="Кнопка удаления карточки"
        title="Удалить"
        className={cardDeleteButtonClassName}>
      </button>
      <div className="element__description-wrapper">
        <h2 className="element__title">{name}</h2>
        <div className="element__of-wrapper-likes">
          <button
            type="button"
            aria-label="Кнопка с отметкой - нравится"
            title="Нравится"
            className="element__like">
          </button>
          <p className="element__of-number-likes">{likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;