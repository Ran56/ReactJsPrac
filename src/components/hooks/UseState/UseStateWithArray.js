import React, { useState } from 'react';

export default function UseStateWithArray(){

        const [items,setItem] = useState([
            {id:0,value:0},
            {id:1,value:1}
        ]);

        const handleAddItem = () => {
            const newItem = {id:items.length,value:Math.floor(Math.random()*10)+1};
            
            setItem([...items,newItem]);


            console.log(newItem);

            // setItem();
        }

        return (
            <div>
                <h1>UseStateWithArray Component</h1>
                <u1>
                    {
                        items.map(item => <li key={item.id}> {item.value}</li>)
                    }     
                </u1>
                
                <button onClick={handleAddItem}>Add Item</button>
            </div>
        );
    }