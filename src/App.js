import React from 'react';
import './App.css';
import Card from './Card.js';
import cardImage from './assets/cao-cao.jpg';
import redImage from "./assets/guan-yu.jpg"

function App() {
  return (
    <div className="card-container">
      
      <div className= "card-items">
      <Card
        hero={{
          cardType: "blue",
          imgUrl: cardImage,
          name: "Cao Cao",
          firstSkillName: "Villainous Hero",
          firstSkillDesc: "Whenever you are damaged you can immediately keep the card that damages you.",
          secondSkillName: "Royal Escort [Ruler Ability]",
          secondSkillDesc: "If you need to use a DODGE, a member of the Wei can DODGE on your behalf."
        }}
      />
            <Card
        hero={{
          cardType: "red",
          imgUrl: redImage,
          name: "Guan Yu",
          firstSkillName: "Warrior Saint",
          firstSkillDesc: "All you red cards can be used as ATTACK.",
          secondSkillName: "Absolute Loyalty",
          secondSkillDesc: "Once per turn, you can points duel another player. If you win, the other player cannot use any cards from their hand or non-enforced character abilities for the rest of the turn. If you lose, you may let the other person recover one health."
        }}
      />
            <Card
        hero={{
          cardType: "red",
          imgUrl: cardImage,
          name: "Cao Cao",
          firstSkillName: "Villainous Hero",
          firstSkillDesc: "Whenever you are damaged you can immediately keep the card that damages you.",
          secondSkillName: "Royal Escort [Ruler Ability]",
          secondSkillDesc: "If you need to use a DODGE, a member of the Wei can DODGE on your behalf."
        }}
      />

      </div>

    </div>
    
  );
}

export default App;
