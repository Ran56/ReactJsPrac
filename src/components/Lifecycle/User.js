import React, { Component } from 'react';

export default class User extends Component {
    


componentDidMount(){
    console.log('componentDidMount ');
}
componentDidUpdate(){
    console.log('componentDidUpdate ');

}
shouldComponentUpdate(){
    console.log('shouldComponentUpdate ');
    // if(this.props.name === '')
    // {
    //     return true;
    // }
    // else{
    //     return false;//if return false, render will not be re-render
    // }
    return true;
}

componentWillUnmount(){
    console.log('componentWillUnmount ');

}
    render() {
        console.log('Render ');
        return (
            <div>
                <h1>I am a User! My name is {this.props.name} </h1>
            </div>
        );
    }
}

