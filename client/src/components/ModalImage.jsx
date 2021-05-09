import React from 'react';
import ReactDOM from 'react-dom';

const ModalImage = (props) => {

  return (
    <div>
      <img className="modal-image" src={props.link} onClick={() => props.click(props.link)}/>
    </div>
  )
}

export default ModalImage;