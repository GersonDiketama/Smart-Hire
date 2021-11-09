import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import { EmployerDetail } from './EmploymentsDetails'
import SendInvitation from './SendInvitation'
import GetSolicitationsForRecruiters from './GetSolicitationsForRecruiters'
import GetRecruitersInvitations from '../Employer/GetRecruitersInvitations'
import RecruiterJobPost from './RecruiterJobPost'
import PostedJob from './PostedJob'
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
                <GetRecruitersInvitations/>
            </Route>

            <Route path="/post_job">
                <NavBar/>
                <RecruiterJobPost/>
            </Route>

            <Route exact path="/posted_jobs">
                <NavBar/>
                <PostedJob/>
            </Route>

        </div>
    )
}

export default RecruitersViews
