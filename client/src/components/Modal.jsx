import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './ImageList.jsx';
import Image from './Image.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: this.props.link,
      imageList: this.props.links
    }
  }

  test () {
    this.setState({
      image: this.props.link,
      imageList: this.props.links
    })
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal display-block">
        <div className="modal-main">
          <h2 onClick={() => this.test()}>Modal</h2>
          <ImageList links={this.props.links} imageClick={this.props.imageClick}/>
          <div className="arrow">
            <button onClick={() => this.props.previousClick()}>Previous</button>
          </div>
          <img className="display" src={this.props.link}/>
          <div className="arrow">
            <button onClick={() => this.props.nextClick()}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;