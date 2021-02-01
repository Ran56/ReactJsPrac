import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div>
            <u1>

                <Link to='/'>
                <li>Home</li>
                </Link>

                <Link to='/users'>
                <li>Users</li>
                </Link>

                <Link to='/about'>
                <li>About</li>
                </Link>

            </u1>
                        
        </div>
    )
}
