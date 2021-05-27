import React from 'react';
import ReactDOM from 'react-dom';
import ModalImage from './ModalImage.jsx';
import styles from '../styles/ModalImageList.module.css';

const ModalImageList = (props) => {

  return(
    <div id={styles.gallery}>
      {props.links.map((link, i) => {
        if ((i + 1) % 3 === 0 && link === props.link) {
          return <ModalImage key={i} link={link} click={props.click} size={'lg'} selected={true}/>
        } else if ((i + 1) % 3 !== 0 && link === props.link) {
          return <ModalImage key={i} link={link} size={'sm'} click={props.click} selected={true}/>
        } else if ((i + 1) % 3 === 0) {
          return <ModalImage key={i} link={link} click={props.click} size={'lg'}/>
        } else if ((i + 1) % 3 !== 0) {
          return <ModalImage key={i} link={link} click={props.click} size={'sm'}/>
        }
      }
      )}
    </div>
  )
}
export default ModalImageList;