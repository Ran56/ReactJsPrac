//class based component
import React, { Component } from 'react';

class Users extends Component{

    state = {//we can use state put data inside it so that can update some data
        //other component like data, we cannot update its properties or value
        //we can see difference between button-change my age and button-change my city
        //since when we create a button related to update properties of state and to click it then it will re-render()
        //so this is why state can be update its properties 
        name: 'Ran111',
        age: 21
    }

    data = {
        city: "DC"
    }

    changeMyAge = (newAge,newName) =>{
        // this.state.age = 22;
        this.setState({age:newAge,name:newName});
    }
    changeMyCity = () =>{
        console.log("change my city from here ");
        console.log("Before changing it ",this.data.city);
        this.data.city = 'Virginia';
        console.log("After changing it ",this.data.city);

    }
    render(){
        console.log("I am a render() ");
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age}</h3>
                <button onClick={() => this.changeMyAge(18,'Chris')}>change my age</button>
               {/* when we need to pass value we have to add "() => "" */}
          
          
          
                <hr/>
                <h3>{this.data.city}</h3>
                <button onClick={this.changeMyCity}>change my city</button>
            </div>
            //if just one h1 we can no use div;
            //more than one we need it
        );
    }
}
export default Users;