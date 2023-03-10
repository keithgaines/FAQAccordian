import React, { useState } from 'react';
import './App.css';
import Card from './Cards';

const cardData = [
  { title: "How many team members can I invite?", content: "Content for Card 1" },
  { title: "Card 2", content: "Content for Card 2" },
  { title: "Card 3", content: "Content for Card 3" },
  { title: "Card 4", content: "Content for Card 4" },
  { title: "Card 5", content: "Content for Card 5" },
];

const App = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      <div className='headerimage'>
        <img src='../images/illustration-woman-online-mobile.svg' />   
      </div>
      <div className='container'>
        <div className='deskshadow'>
          <img src='../images/bg-pattern-mobile.svg' />
        </div>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            onClick={() => handleCardClick(index)}
            isExpanded={expandedIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
