import React from 'react';
import ReactDOM from 'react-dom';

function Display(props) {
  return (
    <img className="display" src={props.link.image_one} alt=""/>
  )
}

export default Display;