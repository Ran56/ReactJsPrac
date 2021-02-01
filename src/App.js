import React from 'react';
import './App.css';
import User121 from './components/User121';
import Users121 from './components/Users121';
import Counter from './components/Counter';
import Movies from './components/Movies/Movies';
import Calculator from './components/Calculator/Calculator';

import Users from './components/Lifecycle/Users';
import RealCaculator from './RealCalculator';
import Sync from './components/Sync/Sync';
import Movie from './components/Movies/Movie';
import UsersGet from './assignment/UsersGet';
import ClassCounter from './components/hooks/UseState/ClassCounter';
import HooksCounter from './components/hooks/UseState/HooksCounter';
import UseStateWithObjects from './components/hooks/UseState/UseStateWithObjects';
import UseStateWithArray from './components/hooks/UseState/UseStateWithArray';
import ClassExample from './components/hooks/UseEffect/ClassExample';
import UseEffectExample from './components/hooks/UseEffect/UseEffectExample';
import UseEffectComponentDidUpdate from './components/hooks/UseEffect/UseEffectComponentDidUpdate';
import UseEffectButton from './components/hooks/UseEffect/UseEffectButton';
import ComponentA from './components/Context/ComponentA';
import ComponentB from './components/Context/ComponentB';
import ComponentD from './components/Context/ComponentD';
import Rountes from './components/Routing/Routes';


export const UserContext = React.createContext();
export const companyInfoContext = React.createContext();

//first step is to create a context;


class App extends React.Component{
  state ={
    userInfo:{
      name:'Ran',
      age:20
    },
    companyInfo:{
      companyName:'Apple'
    }
  }
  handleNameChange=(event)=>{
    this.setState({name:event.target.value});
  }
  render(){
    return (
      <div className="App">
          {/* <h1>Name: {this.state.name}</h1>
          <input type="text" onChange={this.handleNameChange} value={this.state.name}/> */}
          <Movies />
          {/* <Movie> Ran Zhang </Movie> */}
          {/* {<UsersGet />} */}
          {/* <Users /> */}
          {/* <ClassCounter /> */}
          {/* <HooksCounter /> */}
          {/* <UseStateWithObjects /> */}
          {/* <UseStateWithArray /> */}
          {/* <UseEffectExample /> */}
          {/* <UseEffectComponentDidUpdate /> */}
          {/* <UseEffectButton /> */}

          {/* <UserContext.Provider value={this.state.userInfo}> */}
            {/* second step is to provide a value at a high level */}
            {/* <companyInfoContext.Provider value={this.state.companyInfo}> */}
            {/* <h1>App Component: UserNmae is Ran</h1> */}
            {/* <ComponentA /> */}
            {/* <ComponentB /> */}
            {/* </companyInfoContext.Provider>
          </UserContext.Provider> */}

          {/* <Rountes /> */}


      </div>
    );
  }

}
export default App;
