import React, { useState, useEffect} from 'react'

export default function UseEffectComponentDidUpdate() {
    const [count,setCount] = useState(0);
    
    useEffect(() =>{
        console.log('Component is updating...');
    },[count]);


    const handleClick = () => {

        setCount(count+1);
    }
    
    return (
        <div>
            <h1>UseEffectComponentDidUpdate</h1>
            <button onClick={handleClick}>Count {count}</button>
        </div>
    )
}
