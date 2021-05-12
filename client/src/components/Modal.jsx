import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './ImageList.jsx';
import ModalImage from './ModalImage.jsx';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

const Modal = (props) => {

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal display-block">
      <div className="modal-main">
        <div className="arrow">
          <button onClick={() => props.previousClick()}>Previous</button>
        </div>
        <InnerImageZoom src={props.link} />
        <div className="arrow">
          <button onClick={() => props.nextClick()}>Next</button>
        </div>
        <div className="galleryModalContent">
          {props.links.map((link, i) => {
            return <ModalImage key={i} link={link} click={props.imageClick}/>
          }
          )}
        </div>
        <div className="exit">
          <button onClick={() => props.hide()}>Exit</button>
        </div>

      </div>
    </div>
  )
}

export default Modal;


