import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { SwatchesPicker  } from 'react-color';
import './App.scss';

import { simpleAction, add } from './actions/simpleAction'

class App extends Component {

  handleChange(color, event) {
    console.log("color: " + color.hex)
  }

  simpleAction = (color, event) => {
    this.props.add(color.hex);
    console.log(this.props.simpleReducer.result)
   }

 render() {
  return (
   <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title" style={{color: this.props.simpleReducer.result}}>Welcome to React</h1>
      <div className="App-intro">
        {/* <> 
          {JSON.stringify(this.props.simpleReducer.result)} 
        </> */}
        <button onClick={this.simpleAction}>Test redux action</button>
        <SwatchesPicker onChange={ this.simpleAction } />
        {/* <ul>{this.props.simpleReducer.pastColor.map((color, i) => <li key={i} style={{color: color}}>{color}</li>)}
        </ul> */}
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
  simpleAction: (color) => dispatch(simpleAction(color)),
  add: (color) => dispatch(add(color))
 })


 export default connect(mapStateToProps, mapDispatchToProps)(App);
