import React from 'react';

function PopupWithForm({title, name, children, isOpen, onClose}) {
  return(
    <div className={`pop-up pop-up_${name} ${isOpen}`}>
        <div className="pop-up__container">
          <form className="pop-up__form" name={name} noValidate>
            <h2 className="pop-up__title">{title}</h2>
            {children}
          </form>
          <button
            type="button"
            aria-label="Кнопка закрытия модального окна"
            title="Закрыть"
            className="pop-up__close-btn"
            onClick={onClose}
          ></button>
      </div>
  </div>
  )
}

export default PopupWithForm;