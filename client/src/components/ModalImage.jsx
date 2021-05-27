import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/ModalImage.module.css';

const ModalImage = (props) => {

  if (props.size === 'sm') {
    if(props.selected) {
      return (
        <div>
          <img className={styles.sm} src={props.link} onClick={() => {props.click(props.link)}} id={styles.selected}/>
        </div>
      )
    } else {
      return (
        <div>
          <img className={styles.sm} src={props.link} onClick={() => {props.click(props.link)}}/>
        </div>
      )
    }
  } else if (props.size === 'lg') {
    if(props.selected) {
      return (
        <div>
          <img className={styles.lg} src={props.link} onClick={() => {props.click(props.link)}} id={styles.selected}/>
        </div>
      )
    } else {
      return (
        <div>
          <img className={styles.lg} src={props.link} onClick={() => {props.click(props.link)}}/>
        </div>
      )
    }
  }
}

export default ModalImage;