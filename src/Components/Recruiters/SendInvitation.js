import React, { useState } from "react";
import recruiterManager from "./RecruitersManager";
import { useHistory } from "react-router";
import "./recruiterFormStyle.css"
import Button from "@mui/material/Button";

const SendInvitation = () => {
  const [invitation, setInvitation] = useState({
    recruiter_name: "",
    years_of_experience: "",
    state: "",
    city: "",
    description: "",
    phone: "",
    isAccepted: false,
    userId: sessionStorage.getItem("app_user_id"),
    userType: sessionStorage.getItem("userTypeKey"),
  });

  const history = useHistory();

  const handleInput = (event) => {
    event.preventDefault();

    const copy = { ...invitation };
    copy[event.target.id] = event.target.value;
    setInvitation(copy);
  };

  const handleSendInvitation = (evt) => {
    evt.preventDefault();
    recruiterManager
      .recruiterInvitation(invitation)
      .then(() => history.push("/"));
  };

  return (
    <div className="send_invitations">

    <h2>Enter Information regarding your request</h2>

        <form>
        <label>Name</label>
      <input
      className="send_input"
        type="text"
        id="recruiter_name"
        value={invitation.recruiter_name}
        onChange={handleInput}
      />
       <label>Years of Experience</label>
      <input
      className="send_input"
        type="text"
        id="years_of_experience"
        value={invitation.years_of_experience}
        onChange={handleInput}
      />
       <label>State</label>
      <input
      className="send_input"
        type="text"
        id="state"
        value={invitation.state}
        onChange={handleInput}
      />
       <label>City</label>
      <input
      className="send_input"
        type="text"
        id="city"
        value={invitation.city}
        onChange={handleInput}
      />
       

       <label>Phone Number</label>
      <input
      className="send_input"
        type="text"
        id="phone"
        value={invitation.phone}
        onChange={handleInput}
      />

<textarea
rows="4"
cols="50"
      placeholder="Description"
        type="text"
        id="description"
        value={invitation.description}
        onChange={handleInput}
      ></textarea>
      <div className="center-btn-Recruiter-Send-invitation">
      <Button className="button-style" variant="contained" onClick={handleSendInvitation}>Send</Button>
      <Button className="button-style" style={{backgroundColor:"red"}} variant="contained" onClick={() => history.push("/")}>Cancel ❌</Button>
      </div>
      </form>

        

    </div>
  );
};

export default SendInvitation;
