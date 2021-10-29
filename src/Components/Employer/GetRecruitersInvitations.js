import React, { useState, useEffect } from "react";
import recruiterManager from "../Recruiters/RecruitersManager";
import RecruiterSolicitationCard from "./RecruiterSolicitationCard";

const GetRecruitersInvitations = () => {
  const [recruiterInvitation, setRecruiterInvitation] = useState([]);

  const getRecruiterSolicitation = () => {
    recruiterManager
      .getRecruiterInvitations()
      .then((data) => setRecruiterInvitation(data));
  };

  useEffect(() => {getRecruiterSolicitation()},[])

  return <div>
      {recruiterInvitation.map(invitation => <RecruiterSolicitationCard key={invitation.id} recruiterSolicitations={invitation} getRecruiterSolicitation={getRecruiterSolicitation}/>)}
  </div>;
};

export default GetRecruitersInvitations;
