import React, { useState } from 'react';
export default function HooksCounter() {

        const [count, setCount] = useState(0);

        const handleClick = () =>{
            setCount(count+1)
        }
        //we have to declare it as const
        //since in the class we can have a normal handleClick() method as class properties
        //but in function there is no properties so we have to store handleClick method as a variable

        return (
            <div>
                 <h1> HooksCounter Component</h1>
                {/* <button onClick={this.handleClick}>
                    Count {this.state.count}
                </button> */}
                <button onClick={handleClick}>
                    Count {count}
                </button>
            </div>
        );
    }
