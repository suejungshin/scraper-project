import React from 'react';
import './App.css';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  componentDidMount() {

  }

  get() {
    $.ajax({

    })
  }


  render() {

    return (
      <div className="app-container">
        Hello!
      </div>
    )
  }
}


export default App;