import React from 'react'

import { UserContext } from '../../App';

export default function ComponentD() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    (userName)=> {
                        return <h1>ComponentD: userName is {userName}</h1>
                        
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
