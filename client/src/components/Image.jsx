import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/Image.module.css';

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: .5,
      cursor: ''
    }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({
      opacity: 0.75,
      cursor: 'pointer'
    })
  }

  mouseLeave() {
    this.setState({
      opacity: 0.5
    })
  }

  render() {
    return (
      <div style={{cursor: this.state.cursor}} onClick={() => this.props.click(this.props.link)}>
        <img style={{opacity: this.state.opacity}} className={styles.image} src={this.props.link} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}/>
      </div>
    )
  }
}

export default Image;

// id={`${this.props.link === this.props.links[0] ? "selected" : ""}`}