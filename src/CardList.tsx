import React, { useState } from 'react';
import './App.css'
import './nav.css'


const CardList = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const activateCard = (index: number) => {
    if (selectedCard === index) {
      setSelectedCard(null); // Deselect the currently selected card
    } else {
      setSelectedCard(index); // Select the clicked card
    }
  };

let index = [1,2,3,4,5,6];  

  return (
    <div className="box">
      {/* Card 1 */}
      {index.map((item)=>(
        <div key={item}
        className={`list ${selectedCard === item ? 'list active' : 'list'}`}
        onClick={() => activateCard(item)}
      >
        <div className="imgBx">
          <img src="/icon1.png" alt="" />
        </div>
        <div className="content">
          <h2 className="rank"><small>#</small>{item}</h2>
          <h4><a href="#">Subject {item}</a></h4>
          <p>Course Code {item}</p>
          <div className="units">
            <div className="a">Unit 1</div>
            <div className="a">Unit 2</div>
            <div className="a">Unit 3</div>
            <div className="a">Unit 3</div>
            <div className="viewA">Open</div>
          </div>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default CardList;
