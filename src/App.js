import React from 'react';
import './App.css';
import User121 from './components/User121';
import Users121 from './components/Users121';
import Counter from './components/Counter';
import Movies from './components/Movies/Movies';
import Calculator from './components/Calculator/Calculator';

import Users from './components/Lifecycle/Users';
import RealCaculator from './RealCalculator';
class App extends React.Component{
  state ={
    name:'Ran'
  }
  handleNameChange=(event)=>{
    this.setState({name:event.target.value});
  }
  render(){
    return (
      <div className="App">
          {/* <h1>Name: {this.state.name}</h1>
          <input type="text" onChange={this.handleNameChange} value={this.state.name}/> */}
          {/* <Movies /> */}
          <RealCaculator />
      
      </div>
    );
  }

}
export default App;
