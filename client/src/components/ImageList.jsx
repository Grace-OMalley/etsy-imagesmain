import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image.jsx';

const ImageList = (props) => {

  return(
    <div className="galleryContent">
      {props.links.map((link, i) => {
          return <Image key={i} link={link} click={props.click}/>
        }
      )}
    </div>
  )
}

export default ImageList;