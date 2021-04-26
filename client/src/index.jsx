import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<h1>Images Component</h1>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));