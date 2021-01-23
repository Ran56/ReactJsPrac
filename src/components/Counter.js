import React from 'react';

class Counter extends React.Component{

    state = {
        a : 0
    }

    incrementMyA = () => {
        this.setState({a:this.state.a+1});
    }
    decreaseMyA = () => {
        this.setState({a:this.state.a-1});
    }
    render(){
        return (
        <div>
            <h1>{this.state.a}</h1>
            <h3><button onClick={this.incrementMyA}>increment my a</button></h3>

            <h3><button onClick={this.decreaseMyA}>decrease my a</button></h3>
        </div>
        );
    }
}
export default Counter;