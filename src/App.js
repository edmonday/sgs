import React from 'react';
import './App.css';
import { Button, Card } from '@material-ui/core';
import RecipeReviewCard from './Card.js';

function App() {
  return (
    <div className="flexbox-container">
      <div className= "flexbox-item">
      <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </div>

    </div>
    
  );
}

export default App;
