import React, {useState,useEffect} from 'react'

export default function UseEffectComponentWillUnmount() {
    useEffect(()=>{
        console.log('Component is mounted ');

        return () => console.log('Component will be destroyed! ');
    });

    return (
        <div>
            <h1>UseEffectComponentWillUnmount component</h1>
        </div>
    )
}
