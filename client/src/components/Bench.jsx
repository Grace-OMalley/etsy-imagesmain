import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Bench = (props) => {
  let links = props.links.shift();

  return(
    <div>
      {props.links.map((link) => {
          return <img src={link} className="benchContent"/>
        }
      )}
    </div>
  )
}

export default Bench;