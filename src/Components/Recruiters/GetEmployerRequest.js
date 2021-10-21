import React, {useState, useEffect} from 'react'
import recruiterManager from './RecruitersManager'
import RecruiterCards from './RecruiterCards'

const GetEmployerRequest = () => {

    const[employerRequest, setEmployerRequests] = useState([])
    const[selectedCompany, setSelectedCompany] = useState(null)

    const getEmployersPost = () =>
    {
        recruiterManager.getEmployersResquests().then(request => setEmployerRequests(request))
    }

    useEffect(() =>{getEmployersPost()},[])

    return (
        <div>
            {employerRequest.map(datas => <RecruiterCards selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} key={datas.id} data={datas}/>)}
        </div>
    )
}

export default GetEmployerRequest
