import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.jsx'


class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true
    })
  }

  hideModal() {
    this.setState({
      show: false
    })
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
        <div>
          <Modal link={this.props.link} links={this.props.links} hide={this.hideModal} show={this.state.show} imageClick={this.props.imageClick} nextClick={this.props.nextClick} previousClick={this.props.previousClick}/>
        </div>
      </div>
    )
  }
}

export default Display;