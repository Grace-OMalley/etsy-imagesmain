import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image.jsx';

const ImageList = (props) => {

  return(
    <div>
      {props.links.map((link, i) => {
          if (link === props.link) {
            return <Image key={i} link={link} links={props.links} click={props.imageClick} selected={true}/>
          } else {
            return <Image key={i} link={link} links={props.links} click={props.imageClick}/>
          }
        }
      )}
    </div>
  )
}

export default ImageList;

