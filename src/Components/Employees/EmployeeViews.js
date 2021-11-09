import React from 'react'
import { Route } from 'react-router'
import Home from "./Home"

const EmployeeViews = () => {
    return (
        <div>
            <Route exact path="/">
                <Home/>
            </Route>
        </div>
    )
}

export default EmployeeViews
