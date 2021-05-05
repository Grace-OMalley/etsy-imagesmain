import React from 'react';
import ReactDOM from 'react-dom';

// function Display(props) {
//   return (
//     <div className="displayContainer">
//       <div className="arrow">
//         <button onClick={() => props.previousClick()}>Previous</button>
//       </div>
//       <img className="display" src={props.link} alt=""/>
//       <div className="arrow">
//         <button onClick={() => props.nextClick()}>Next</button>
//       </div>
//     </div>
//   )
// }

class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: ''
    }
  }

  render() {
    return (
      <div className="displayContainer">
        <div className="arrow">
          <button onClick={() => this.props.previousClick()}>Previous</button>
        </div>
        <img className="display" src={this.props.link} alt=""/>
        <div className="arrow">
          <button onClick={() => this.props.nextClick()}>Next</button>
        </div>
      </div>
    )

  }
}

export default Display;