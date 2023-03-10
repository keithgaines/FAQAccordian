import React from 'react';

const Card = ({ title, content, onClick, isExpanded }) => {
  return (
    <div className="faq-card">
      <div className="faq-card-header" onClick={onClick}>
        <h3 className="faq-card-title">{title}</h3>
        <div className={`faq-card-icon ${isExpanded ? 'expanded' : ''}`}>
          <span className="fas fa-chevron-down"></span>
        </div>
      </div>
      {isExpanded && <div className="faq-card-content">{content}</div>}
    </div>
  );
};

export default Card;
