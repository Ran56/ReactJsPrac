import React, { Component } from 'react';
//if we use export default class ClassCounter then when we import ClassCounter we don't have to 
//add curly braces like import { ClassCounter }. If we use export class ClassCounter then we have to use 
// add curly braces if we import { ClassCounter }

export default class ClassCounter extends Component {
    
    state = {
        count:0
    }
    
    handleClick = () => {
        this.setState({count:this.state.count+1})
    }
    
    render() {
        return (
            <div>
                <h1> ClassCounter Component</h1>
                <button onClick={this.handleClick}>
                    Count {this.state.count}
                </button>
            
            
            </div>
        );
    }
}
