import React from 'react';
import ReactDOM from 'react-dom';

// const ModalImage = (props) => {

//   return (
//     <div>
//       <img className="modal-image" src={props.link} onClick={() => props.click(props.link)}/>
//     </div>
//   )
// }

// export default ModalImage;


class ModalImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  handleClick() {
    console.log('modal click')
    this.setState({
      selected: true
    })
  }


  render() {
    if (this.state.selected === true) {
      return (
        <div>
          <img className="modal-image selected-modal" src={this.props.link} onClick={() => {
          this.props.click(this.props.link);
          this.handleClick();
          }}/>
        </div>

      )
    }
    return (
      <div>
        <img className="modal-image" src={this.props.link} onClick={() => {
          this.props.click(this.props.link);
          this.handleClick();
          }}/>
      </div>
    )
  }
}

export default ModalImage;