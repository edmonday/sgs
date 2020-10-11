import React from 'react';
import './Card.css';


function Card(props) {
    console.log(props)
    return (
        <div className = "sgsCard">
            <div className = "cardImg">
            <img src={props.hero.imgUrl} alt={props.hero.name}/>
            <div className = "backgroundBox" ></div>
            <div className = "textBox">
                <h3>{props.hero.name}</h3>
                <b>{props.hero.firstSkillName}</b>
                <p>{props.hero.firstSkillDesc}</p>
                <b>{props.hero.secondSkillName}</b>
                <p>{props.hero.secondSkillDesc}</p>
         </div>
        </div>




        </div>
        );
}

export default Card;


