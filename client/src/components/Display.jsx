import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.jsx'


class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div className="displayContainer">
        <div className="arrow">
          <button onClick={() => this.props.previousClick()}>Previous</button>
        </div>
        <img className="display" src={this.props.link} onClick={this.showModal} />
        <div className="arrow">
          <button onClick={() => this.props.nextClick()}>Next</button>
        </div>
      </div>
    )

  }
}

export default Display;