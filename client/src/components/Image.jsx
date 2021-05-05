import React from 'react';
import ReactDOM from 'react-dom';

// const Image = (props) => {

//   return(
//     <div>
//       <img className="image" src={props.link} onClick={() => props.click(props.link)} onMouseEnter={() => console.log('hovering...')}/>
//     </div>
//   )
// }

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: .5
    }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({
      opacity: 0.75
    })
}

mouseLeave() {
    this.setState({
      opacity: 0.5
    })
}

  render() {
    return (
      <div style={{opacity: this.state.opacity}}>
        <img className="image" src={this.props.link} onClick={() => this.props.click(this.props.link)} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}/>
      </div>
    )
  }
}

export default Image;