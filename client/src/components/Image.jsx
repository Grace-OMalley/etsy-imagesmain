import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/Image.module.css';

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: ''
    }
  }

  render() {

    if (this.props.selected) {
      return (
        <div onClick={() => this.props.click(this.props.link)}>
          <img className={styles.image} src={this.props.link} id={styles.selected}/>
        </div>
      )
    } else {
      return (
        <div onClick={() => this.props.click(this.props.link)}>
          <img className={styles.image} src={this.props.link}  />
        </div>
      )
    }
  }
}

export default Image;

// id={`${this.props.link === this.props.links[0] ? "selected" : ""}`}