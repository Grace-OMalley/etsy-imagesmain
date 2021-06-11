import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/Image.module.css';

const Image = (props) => {

  if (props.selected) {
    return (
      <div onClick={() => props.click(props.link)}>
        <img className={styles.image} src={props.link} id={styles.selected}/>
      </div>
    )
  } else {
    return (
      <div onClick={() => props.click(props.link)}>
        <img className={styles.image} src={props.link}  />
      </div>
    )
  }
}

export default Image;

