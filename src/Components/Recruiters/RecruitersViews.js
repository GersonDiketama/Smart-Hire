import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import { EmployerDetail } from './EmploymentsDetails'
import SendInvitation from './SendInvitation'
import GetSolicitationsForRecruiters from './GetSolicitationsForRecruiters'
import NavBar from './NavBar'



const RecruitersViews = () => {
    return (
        <div>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/:employerId(\d+)">
                <EmployerDetail/>
            </Route>

            <Route exact path="/:invitations/(\d+)">
                <NavBar/>
                <SendInvitation/>
            </Route>
            
            <Route exact path="/invitations">
                <NavBar/>
                <GetSolicitationsForRecruiters/>
            </Route>

        </div>
    )
}

export default RecruitersViews
