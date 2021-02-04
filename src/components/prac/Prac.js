import React, {useState, useEffect} from 'react'

export default function Prac() {

    const [count,setCount] =  useState(0);


    useEffect(() => {
        console.log("effect count is=====",count )
        return () =>{
        console.log("return effect count is=====",count )
        }
    }, [])


    const handleCount = ()=>{
        setCount(count+1)
        console.log(' handlecount function count is : ------ ',count)
    }

    return (
        <div>
            <h1>{count}</h1>
            {
                console.log('return function count is : ------ ',count)
            }
          <button onClick={handleCount}>count {count}</button>  
        </div>
    )
}
