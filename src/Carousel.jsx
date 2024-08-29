import React, { useState } from 'react';
import './index.css'; // Make sure to import the CSS file

const Carousel = () => {
  const [message, setMessage] = useState('');

  const handleCommit = () => {
    setMessage('2e813de');
  };

  const handleAnalytics = () => {
    setMessage('32 online now');
  };

  const handleUpgrade = () => {
    setMessage('2 days left in your trial');
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-items'>
        <h2>{message}</h2>
      </div>
      <div className='carousel-action'>
        <button onClick={handleCommit}>Commit</button>
        <button onClick={handleAnalytics}>Analytics</button>
        <button onClick={handleUpgrade}>Upgrade</button>
      </div>
    </div>
  );
};

export default Carousel;
