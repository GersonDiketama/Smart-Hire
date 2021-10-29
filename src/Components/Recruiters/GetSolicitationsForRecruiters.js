import React, {useState, useEffect} from 'react'
import recruiterManager from './RecruitersManager'
import RecruiterInvitationCards from './RecruiterInvitationCards'



const GetSolicitationsForRecruiters = () => {
    const[recruiterSolicitation, setRecruiterSolicitation] = useState([])
    
    const getRecruiterSolicitations = () =>
    {
        recruiterManager.getRecruiterInvitations().then(data => setRecruiterSolicitation(data))
    }

    useEffect(() => {getRecruiterSolicitations()},[])
    
    return (
        <div>
            {recruiterSolicitation.map( solicitations => <RecruiterInvitationCards key={solicitations.id} viewSolicitations={solicitations}/>)}
        </div>
    )
}

export default GetSolicitationsForRecruiters
