import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/ModalImage.module.css';


class ModalImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  handleClick() {
    console.log('modal click')
    this.setState({
      selected: true
    })
  }

  render() {
    if (this.state.selected === true) {
      return (
        <div>
          <img className={styles.modalImage, styles.selectedModal} src={this.props.link} onClick={() => {
          this.props.click(this.props.link);
          this.handleClick();
          }}/>
        </div>

      )
    }
    return (
      <div>
        <img className={styles.modalImage} src={this.props.link} onClick={() => {
          this.props.click(this.props.link);
          this.handleClick();
          }}/>
      </div>
    )
  }
}

export default ModalImage;