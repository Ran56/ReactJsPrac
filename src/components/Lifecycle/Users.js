import React, { Component } from 'react';

import User from './User';





export default class Users extends Component {

    state = {
        name:'Ran'
    }
    changeName = () =>{
        this.setState({name:'Chris'});
    }


    render() {
        return (
            <div>
                <h1>Users Component</h1>
                
                {this.state.name === 'Ran' ? <User name = {this.state.name}/>:null}
                {/* //equal to this line */}
                {/* {this.state.name === 'Ran' && <User name = {this.state.name}/>} */}

                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

