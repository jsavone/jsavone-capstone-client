import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.recipes)
    return (
      <div className="App">
        This is my Capstone!
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps)(App);
