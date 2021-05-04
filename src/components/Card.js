import React from 'react';

function Card({name, link, likes, onCardClick}) {

  const handleClick =()=> {
    onCardClick(name, link);
  } 

  return (
    <article className="element">
      <img
        src={link}
        alt={name}
        className="element__image"
        onClick={handleClick} />
      <button
        type="button"
        aria-label="Кнопка удаления карточки"
        title="Удалить"
        className="element__deleted">
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