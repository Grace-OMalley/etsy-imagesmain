import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display.jsx';
import ImageList from './components/ImageList.jsx';

//import "./styles.css";
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      imageList: [],
      show: false
    }
    this.onImageClick = this.onImageClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onPreviousClick = this.onPreviousClick.bind(this);
  }

  componentDidMount() {
    axios.get('/images')
    .then((response) => {
      let linksList = Object.values(response.data.imagesUrl)
      this.setState({
        image: linksList[0],
        imageList: linksList
      })
    })
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
            image: this.state.imageList[this.state.imageList.length - 1]
          })
        } else {
          this.setState({
            image: this.state.imageList[i - 1]
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
            image: this.state.imageList[0]
          })
        } else {
          this.setState({
            image: this.state.imageList[i + 1]
          })
        }
      }
    }
  }

  render() {

    return (
      <div>
        <h1>Image Slider</h1>
        <div className='galleryContainer'>
          <ImageList links={this.state.imageList} click={this.onImageClick}/>
          <Display link={this.state.image} links={this.state.imageList} nextClick={this.onNextClick} previousClick={this.onPreviousClick}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));