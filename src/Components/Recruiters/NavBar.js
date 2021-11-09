import React from 'react'
import { Link} from 'react-router-dom'
import { useHistory } from 'react-router'
import Button from "@mui/material/Button";


const NavBar = () => {

    const history = useHistory()

    const sessionToRemove = ["app_user_id", "userTypeKey"]

    return (
        <div className="nav_bar">
        
            <li>
            <Link to ="/">Home</Link>
            </li>

            <li>
            <Link to ="/invitations">Invitations</Link>
            </li>

            <li>
            <Link to ="/invoices">Invoices</Link>
            </li>

            <li>
            <Link to ="/settings">Settings</Link>
            </li>

            <li>
                <Link to="/post_job">Post Job</Link>
            </li>

            <li>
                <Link to="/posted_jobs">Job Posted</Link>
            </li>



            <li className="nav__item">
          <Button variant="contained" className="nav__button" onClick={() => {
              for (const key of sessionToRemove)
              {
            sessionStorage.removeItem(key);
            history.push("/login")}
        }}>Logout</Button>
        </li>
        </div>
    )
}

export default NavBar
