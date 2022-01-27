import React from 'react';

const MessagePopup = React.memo(({title, isOpen}) => {

  return (
    <div className={`pop-up ${isOpen ? 'pop-up_opened' : ''}`}>
        <div className="pop-up__container">
          <h2
            className="pop-up__title"
            style={{margin: '0', textAlign: 'center'}} >
            {title}
          </h2>
      </div>
  </div>
  );
})

export default MessagePopup;