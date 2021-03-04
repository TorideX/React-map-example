import React, { Component } from 'react';
import './App.css';
import { CustomMap } from './components/CustomMap';

class App extends Component {

  state={
    name:"How can I get to Taksim?"
  }

  myButtonClicked = ()=>{
    this.setState({name:"Hawagi?"})
  }

  render(){
    return (
      <div className="App">
        <CustomMap/>
      </div>
    );
  }
}

export default App;