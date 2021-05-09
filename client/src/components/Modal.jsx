import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './ImageList.jsx';
import ModalImage from './ModalImage.jsx';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'



class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      imageList: []
    }
  }



  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal display-block">
        <div className="modal-main">

          <h2 onClick={() => this.props.hide()}>Modal</h2>

          <div className="galleryModalContent">
            {this.props.links.map((link, i) => {
              return <ModalImage key={i} link={link} click={this.props.imageClick}/>
            }
           )}
          </div>
          <div className="arrow">
            <button onClick={() => this.props.previousClick()}>Previous</button>
          </div>
          <InnerImageZoom src={this.props.link} />
          <div className="arrow">
            <button onClick={() => this.props.nextClick()}>Next</button>
          </div>

        </div>
      </div>
    )
  }
}

export default Modal;

