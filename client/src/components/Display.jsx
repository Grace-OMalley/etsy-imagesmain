import React from 'react';
import ReactDOM from 'react-dom';

const Display = (props) => {


  return (
    <div className="display-container">
      <div className="arrow">
        <button onClick={() => props.previousClick()}>Previous</button>
      </div>
      <img className="main-display" src={props.link} onClick={() => props.showModal()}/>
      <div className="arrow">
        <button onClick={() => props.nextClick()}>Next</button>
      </div>
      <button className="like">Like</button>
    </div>
  )
}

export default Display;
