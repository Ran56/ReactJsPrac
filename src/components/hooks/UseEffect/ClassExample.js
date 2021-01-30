import React, { Component } from 'react';
import axios from 'axios';

class ClassExample extends Component {
    
    state = {
        posts:[]
    }

    componentDidMount = () => {
       axios.get('http://jsonplaceholder.typicode.com/posts')
       .then(response =>{
           console.log('response ',response.data);

           this.setState({posts:response.data});
       })
        
    
    }

    render() {
        return (
            <div>
                <h1>ClassExample Component</h1>
                <u1>
                    {
                        this.state.posts.map(post => <li key={post.id}>{post.title}</li>)
                    }
                </u1>
            
            </div>
        );
    }
}

export default ClassExample;