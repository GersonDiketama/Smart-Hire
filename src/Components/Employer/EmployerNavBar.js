import React from "react";
import { Link } from "react-router-dom";
import "./employerForm.css"
const EmployerNavBar = () => {
    return (
        <div className="nav-bar">
            <li>
            <Link to ="/">Home</Link>
            </li>

            <li>
            <Link to ="/sent_invitations">Sent Invitations</Link>
            </li>

            <li>
            <Link to ="/invoices">Invoices</Link>
            </li>

            <li>
            <Link to ="/settings">Settings</Link>
            </li>
    
        </div>
    )
}

export default EmployerNavBar
