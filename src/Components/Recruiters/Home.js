import React from 'react'
import NavBar from './NavBar'
import GetEmployerRequest from './GetEmployerRequest'
import RecruiterCards from './RecruiterCards'
import RecruiterHeaders from './RecruiterHeaders'
const Home = () => {
    return (
        
        <div> 
        <NavBar/> 
        <RecruiterHeaders/>
        <GetEmployerRequest/>      
        </div>
    )
}

export default Home
