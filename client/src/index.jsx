import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display.jsx';
import Bench from './components/Bench.jsx';
//import "./styles.css";
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: {}
    }
  }

  componentDidMount() {
    axios.get('/data')
    .then((response) => {
      this.setState({
        image: response.data.imagesUrl
      })
    })
  }

  render() {

    return (
      <div>
        <h1>Image Slider</h1>
        <div className='sliderContainer'>
          <Bench links={Object.values(this.state.image)} />
          <Display link={this.state.image} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));