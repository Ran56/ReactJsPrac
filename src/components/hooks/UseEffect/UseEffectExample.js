import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UseEffectExample() {
   
        const [posts,setPosts] = useState([

        ]);

        useEffect(() => {
            console.log('Inside useEffect');
            axios.get('http://localhost:8080/PlayerAttributes')
            .then(response =>{
                console.log('response ',response.data);
     
                setPosts(response.data);
        
            })
        
        }, [])
        return (
            <div>
                <h1>UseEffectExample Component</h1>
                <u1>
                    {
                        posts.map(post => <li key={post.id}>{post.title}</li>)
                    }
                </u1>
            </div>
        );
    }


