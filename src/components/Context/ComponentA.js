import React from 'react'
import { UserContext } from '../../App'

export default function ComponentA() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    (userName)=> {
                        return <h1>ComponentA: userName is {userName}</h1>
                        //in the normal function we cannot have html elements to show our data
                        // we have to use return
                    }
                }
            </UserContext.Consumer>

        </div>
    )
}
