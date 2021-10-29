import React from "react";
import { PostServices } from "./EmployerServicesPost";
import EmployerNavBar from "./EmployerNavBar";
import { Route } from "react-router-dom";
import ShowEmployerInvitations from "./ShowEmployerInvitations";
import EditEmployerPost from "./EditEmployerPost";
import GetRecruitersInvitations from "./GetRecruitersInvitations";



export const EmployerViews = () => {
  return (
    <>
      <Route exact path="/">
        <>
        
          <EmployerNavBar />
          <PostServices />
        </>
      </Route>

      <Route exact path="/sent_invitations">
        <EmployerNavBar />
        <ShowEmployerInvitations />
      </Route>

      <Route exact path="/sent_invitations/:viewRequestId(\d+)/edit">
        <EditEmployerPost />
      </Route>

      <Route exact path="/recruiter_solicitations">
        <EmployerNavBar />
        <GetRecruitersInvitations/>
      </Route>

      
    
      
     
      
    </>
  );
};
