import React from 'react'

const Users = [{name:'Ran',age:22},{name:'August',age:20}]

function printUsers (){
    setTimeout( () =>{
            Users.map(user => console.log(user.name))
    },1000)
}

function createUser(user){
    setTimeout (()=>{
        Users.push(user);
    },2000)

}

createUser({name:'Zhang',age:19})

// printUsers()

export default function Sync(){
    return(
        <div>
            <h1>Sync component</h1>
        </div>
    )
}