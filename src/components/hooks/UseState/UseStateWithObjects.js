import React, { useState } from 'react';

export default function UseStateWithObjects() {

    const [user,setUser] = useState({name:'Ran',age:20});
    
    const handleClick = () => {
        setUser({...user,age:user.age-1});
    }
    
    
    return (
            <div>
                <h1>UseStateWithObjects Component</h1>
                <h1> {user.name} </h1>
                <h1> {user.age} </h1>
                <button onClick={handleClick}> Make Me Younger </button>
            </div>
        );
}