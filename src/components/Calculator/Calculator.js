import React from 'react';
import Sum from './Sum';
export default class Calculator extends React.Component{

    state = {
        first: 0,
        second: 0,
        sum: 0,
        substract:0,
        multiply:0
    }

    handleAssign = (event) => {
        this.setState({first:event.target.value});
    }
    handleAssign2 = (event) => {
        this.setState({second:event.target.value});
    }

    handleSum = (sum) => {
        this.setState({sum:sum});

    }
    handleSubstract = (substract) => {
        this.setState({substract:substract});
    };


    render(){
        return(
            <div className='calculator'>
                <div>
                    <input type="text" placeholder='Enter first number' onChange={this.handleAssign}/>
                    <input type="text" placeholder='Enter second number' onChange={this.handleAssign2}/>
                </div>
                <div>
                 
                    <Sum first={this.state.first} second={this.state.second} showSum={this.handleSum}/>
                    <h3>{this.state.sum}</h3>

                    <button onClick={() => this.handleSum(Number(this.state.first)+Number(this.state.second))}>Add</button>
                </div>
                <div>
                    <button onClick={() => this.handleSum(Number(this.state.first)-Number(this.state.second))}>Substract</button>
                </div>
                <div>
                    <button onClick={() => this.handleSum(Number(this.state.first)*Number(this.state.second))}>Multiply</button>
                </div>
                <div>
                    <button onClick={() => this.handleSum(Number(this.state.first)/Number(this.state.second))}>Divide</button>
                </div>
              

            </div>
            
        );
    }
}