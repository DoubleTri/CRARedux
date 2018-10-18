import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { SwatchesPicker  } from 'react-color';
import './App.scss';

import { simpleAction } from './actions/simpleAction'

class App extends Component {

  handleChange(color, event) {
    console.log("color: " + color.hex)
  }

  simpleAction = (event) => {
    this.props.simpleAction();
   }

 render() {
  return (
   <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to React</h1>
      <div className="App-intro">
        <> 
          {JSON.stringify(this.props.simpleReducer.result)} 
        </>
        <button onClick={this.simpleAction}>Test redux action</button>
        <SwatchesPicker onChange={ this.handleChange } />
      </div>
    </header>
   </div>
  );
 }
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })


 export default connect(mapStateToProps, mapDispatchToProps)(App);
