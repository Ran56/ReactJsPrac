import React, {useRef,useState} from 'react'

export default function UseRef() {

    const buttonRef = useRef();
    const [result,setResult] = useState(undefined);    

    const handleChange = (e) =>{
        if(buttonRef.current.value)
        console.log('buttonRef.current.value',buttonRef.current.value)
        setResult(e.target.value)
    }
    return (
        <div>
            <input onChange={handleChange} ref={buttonRef}></input>


            <button>{result}</button>

        </div>
    )
}
