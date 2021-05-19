import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './ImageList.jsx';
import ModalImage from './ModalImage.jsx';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import styles from '../styles/Modal.module.css';

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`${styles.modalBackground} ${styles.displayBlock}`} >
        <div className={styles.modalMain}>
            <div className={styles.arrow}>
              <button onClick={() => this.props.previousClick()} className={styles.button}>
                  <span className="etsy-icon wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path></svg></span>
              </button>
            </div>
          <InnerImageZoom src={this.props.link} />
            <div className={styles.arrow}>
              <button onClick={() => this.props.nextClick()} className={styles.button}>
                  <span className="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z"></path></svg></span>
              </button>
            </div>
          <div className="galleryModalContent">
            {this.props.links.map((link, i) => {
              return <ModalImage key={i} link={link} click={this.props.imageClick}/>
            }
            )}
          </div>
        </div>
        <button onClick={() => this.props.hide()} className={styles.exitButton}>
            <span className="etsy-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path></svg></span>
        </button>
      </div>
    )
  }
}

export default Modal;


