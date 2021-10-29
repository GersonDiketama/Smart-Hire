import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";
import "./employerForm.css";


const EmployerNavBar = () => {

    const history = useHistory()

    const sessionToRemove = ["app_user_id", "userTypeKey"]
  return (
    <div className="nav-bar">
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/sent_invitations">My Requests</Link>
      </li>

      <li>
        <Link to="/invoices">Invoices</Link>
      </li>

      <li>
        <Link to="/recruiter_solicitations">Recruiters Solicitations</Link>
      </li>
      <li className="nav__item">
        <Button 
        variant="contained"
          className="nav__button"
          onClick={() => { for(const key of sessionToRemove)
            {
            sessionStorage.removeItem(key);
            history.push("/login");}
          }}>
          Logout
        </Button>
      </li>
    </div>
  );
};

export default EmployerNavBar;
