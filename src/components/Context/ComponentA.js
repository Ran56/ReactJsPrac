import React from 'react'
import { companyInfoContext, UserContext } from '../../App'

export default function ComponentA() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    (userInfo)=> {
                     return (<h1>ComponentA: userName is {userInfo.name}</h1>)
                        //in the normal function we cannot have html elements to show our data
                        // we have to use return
                    }
                }
            </UserContext.Consumer>

        </div>
    )
}
