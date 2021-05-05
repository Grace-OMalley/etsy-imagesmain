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
      imageList: {}
    }
    this.onImageClick = this.onImageClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onPreviousClick = this.onPreviousClick.bind(this);
  }

  componentDidMount() {
    axios.get('/images')
    .then((response) => {
      console.log('response', response)

      this.setState({
        image: response.data.imagesUrl.image_one,
        imageList: response.data.imagesUrl
      })
    })
  }

  onImageClick(link) {
    this.setState({
      image: link
    })
  }

  onPreviousClick() {
    console.log('previous')


  }

  onNextClick() {
    console.log('next')

  }

  render() {

    return (
      <div>
        <h1>Image Slider</h1>
        <div className='galleryContainer'>
          <ImageList links={Object.values(this.state.imageList)} click={this.onImageClick}/>
          <Display link={this.state.image} nextClick={this.onNextClick} previousClick={this.onPreviousClick}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));