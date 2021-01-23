import React from 'react';

export default class RealCaculator extends React.Component{
    // constructor(props){
    //   super(props)
    //   this.state = {
    //     text:""
    //   }
    //   this.change = this.change.bind(this)
    //   this.cal = this.cal.bind(this)
    //   this.cl = this.cl.bind(this)
    // }
    
    state = {
          text:""
    }
      
  
    change(e){
      this.setState({
        text:this.state.text + e.target.innerText
      })
    }
  
    cal(){
      this.setState({
        text: eval(this.state.text)
      })
  
    }
  
    cl(){
      this.setState({
        text:""
      })
    }
  
    render(){
      return(
      <div id="caculator">
  
        <div id="display">
          {this.state.text}
        </div>
  
        <div id="number">
          <div id="one" onClick={this.change}>
            1
          </div>
          <div id="two" onClick={this.change}>
            2
          </div>
          <div id="three" onClick={this.change}>
            3
          </div>
          <div id="four" onClick={this.change}>
            4
          </div>
          <div id="five" onClick={this.change}>
            5
          </div>
          <div id="six" onClick={this.change}>
            6
          </div>
          <div id="seven" onClick={this.change}>
            7
          </div>
          <div id="eight" onClick={this.change}>
            8
          </div>
          <div id="night" onClick={this.change}>
            9
          </div>
          <div id="zero" onClick={this.change}>
            0
          </div>
          <div id="decimal" onClick={this.change}>
            .
          </div>   
          <div id="add" onClick={this.change}>
            +
          </div>
          <div id="substract" onClick={this.change}>
            -
          </div>
          <div id="multiply" onClick={this.change}>
            *
          </div>
          <div id="divide" onClick={this.change}>
            /
          </div>
          <div id="equals" onClick={this.cal}>
            =
          </div>
          <div id="clear" onClick={this.cl}>
            AC
          </div>
        </div>
  
      </div>
    )
   }
  } 
  
  