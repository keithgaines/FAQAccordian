import React from 'react';
import './App.css'

const Card = ({ title, content, onClick, isExpanded }) => {
  return (
    <div className="faq-card">
      <div className="faq-card-header" onClick={onClick}>
        <h1 className="faq-card-title">{title}</h1>
        <img 
          src='../images/icon-arrow-down.svg' 
          alt='expand'
          className={isExpanded ? 'rotate' : ''}
        />
      </div>
      <div className='cardcontent'>
        {isExpanded && <div className="faq-card-content">{content}</div>}
      </div>
    </div>
  );
};

export default Card;
