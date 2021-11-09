import React from 'react'
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import { useHistory } from 'react-router';


const EmployeeNavBar = () => {
    
    const history = useHistory()

    const sessionToRemove = ["app_user_id", "userTypeKey"]

    return (
        <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="jobs_applied">Jobs Applied</Link></li>
            <li><Button variant="contained" onClick={() => {
              for (const key of sessionToRemove)
              {
            sessionStorage.removeItem(key);
            history.push("/login")}
        }}>Log Out</Button></li>
            
        </div>
    )
}

export default EmployeeNavBar
