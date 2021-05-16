import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display.jsx';
import ImageList from './components/ImageList.jsx';
import Modal from './components/Modal.jsx'
import styles from "./styles/index.module.css";


const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      imageList: [],
      modalImage: '',
      modalImageList: [],
      show: false
    }

    axios.get('/images')
    .then((response) => {
      let linksList = Object.values(response.data.imagesUrl)
      this.setState({
        image: linksList[0],
        imageList: linksList,
        modalImage: linksList[0],
        modalImageList: linksList,
        show: false
      })
    })

    this.onImageClick = this.onImageClick.bind(this);
    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onModalGalleryClick = this.onModalGalleryClick.bind(this);
    this.onPreviousModalClick = this.onPreviousModalClick.bind(this);
    this.onNextModalClick = this.onNextModalClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  onImageClick(link) {
    this.setState({
      image: link
    })
  }

  onPreviousClick() {
    for (let i = 0; i < this.state.imageList.length; i++) {
      if (this.state.imageList[i] === this.state.image) {
        if (i === 0) {
          this.setState({
            image: this.state.imageList[this.state.imageList.length - 1],
            modalImage: this.state.imageList[this.state.imageList.length - 1]
          })
        } else {
          this.setState({
            image: this.state.imageList[i - 1],
            modalImage: this.state.imageList[i - 1]
          })
        }
      }
    }
  }

  onNextClick() {
    for (let i = 0; i < this.state.imageList.length; i++) {
      if (this.state.imageList[i] === this.state.image) {
        if (i === (this.state.imageList.length - 1)) {
          this.setState({
            image: this.state.imageList[0],
            modalImage: this.state.imageList[0]
          })
        } else {
          this.setState({
            image: this.state.imageList[i + 1],
            modalImage: this.state.imageList[i + 1]
          })
        }
      }
    }
  }

  onModalGalleryClick(link) {
    this.setState({
      modalImage: link
    })
  }

  onPreviousModalClick() {
    for (let i = 0; i < this.state.modalImageList.length; i++) {
      if (this.state.modalImageList[i] === this.state.modalImage) {
        if (i === 0) {
          this.setState({
            modalImage: this.state.modalImageList[this.state.modalImageList.length - 1]
          })
        } else {
          this.setState({
            modalImage: this.state.modalImageList[i - 1]
          })
        }
      }
    }
  }

  onNextModalClick() {
    for (let i = 0; i < this.state.modalImageList.length; i++) {
      if (this.state.modalImageList[i] === this.state.modalImage) {
        if (i === (this.state.imageList.length - 1)) {
          this.setState({
            modalImage: this.state.imageList[0]
          })
        } else {
          this.setState({
            modalImage: this.state.imageList[i + 1]
          })
        }
      }
    }
  }

  showModal() {
    this.setState({
      //check displayed image
      modalImage: this.state.image,
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
      <div>
        <h2>Images</h2>
        <div className='image-carousel'>
          <ImageList link={this.state.image} links={this.state.imageList} imageClick={this.onImageClick}/>
          <Display link={this.state.image} links={this.state.imageList} nextClick={this.onNextClick} previousClick={this.onPreviousClick} imageClick={this.onImageClick} showModal={this.showModal}/>
        </div>
        <div>
            { this.state.show && <Modal link={this.state.modalImage} links={this.state.modalImageList} hide={this.hideModal} show={this.state.show} previousClick={this.onPreviousModalClick} nextClick={this.onNextModalClick} imageClick={this.onModalGalleryClick}/>
            }
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('images'));