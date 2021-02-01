import React from 'react'

import Users from './Users';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
            <h1>Rountes Component</h1>
            
            <Navbar />
                <Switch>

                    <Route path='/' exact component={Home} />
                    <Route path='/users' component={Users} />
                    <Route path='/about' component={About} />

                </Switch>
            </BrowserRouter>

        </div>
    )
}
