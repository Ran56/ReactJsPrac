import React, { useState }from 'react'
import UseEffectComponentWillUnmount from './UseEffectComponentWillUnmount';

export default function UseEffectButton() {
    const [display,setDisplay] = useState(true);
    
    const handleClick =() =>{
        setDisplay(!display);
    }

    return (
        <div>
            <h1>UseEffectButton Example</h1>
            <button onClick={handleClick}>Toggle</button>
            {
                display?<UseEffectComponentWillUnmount />:null

            }
        </div>
    )
}
