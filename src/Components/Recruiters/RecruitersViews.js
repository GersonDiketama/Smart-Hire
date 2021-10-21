import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

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
