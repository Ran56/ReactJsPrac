import React, {useContext} from 'react'

import { UserContext, companyInfoContext } from '../../App';


export default function ComponentD() {
    
    

    const userInfo = useContext(UserContext);
    const companyInfo = useContext(companyInfoContext);

    return (
        <div>
            <h1>ComponentD: Username is {userInfo.name} and age is {userInfo.age}. Company name is {companyInfo.companyName}</h1>
            {/* this line using hooks */}
            {/* this line has the same function with the code below, save many lines of codes, that's why hooks so important*/}


            {/* <UserContext.Consumer>
                {
                    (userInfo)=> {
                        return(
                            <companyInfoContext.Consumer>
                                {
                                    (companyInfo) => {
                                        return (<h1>ComponentA: userName is {userInfo.name}. Company name is {companyInfo.companyName}</h1>)

                                    }
                                }

                            </companyInfoContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer> */}
        </div>
    )
}
