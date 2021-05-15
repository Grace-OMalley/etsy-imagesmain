import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image.jsx';

const ImageList = (props) => {

  return(
    <div className="galleryContent">
      {props.links.map((link, i) => {
          return <Image key={i} link={link} links={props.links} click={props.imageClick} selected={props.selected}/>
        }
      )}
    </div>
  )
}

export default ImageList;