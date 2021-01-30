import React, { Component } from 'react';

class UsersGet extends Component {

    state = {
        id:'',
        name: '',
        username:'',
        email: ''
    };

    getUsers = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => console.log(json));
        }
    

    handleUserNameChange = () => {

    }

    render() {
        return (
            <div>
            <div className='movies'>
                <button onClick={this.getUsers}>Get</button>

                </div>

            <div className='movies'>
            <input type="text" placeholder='Enter user name' onChange={this.handleUserNameChange} value={this.state.name}/>
            </div>
                


            </div>
        );
    }
}

export default UsersGet;