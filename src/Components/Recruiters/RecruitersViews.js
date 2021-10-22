import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import { Login } from '../Authentication/Login'

const RecruitersViews = () => {
    return (
        <div>
            <Route exact path="/">
            <Home/>
            </Route>

        </div>
    )
}

export default RecruitersViews
