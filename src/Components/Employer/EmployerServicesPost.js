import React, { useState } from "react";
import { useHistory } from "react-router";
import employerDataManager from "./EmployerDataManager";
import Button from "@mui/material/Button";
import "./employerForm.css";

export const PostServices = () => {
  const [services, setServices] = useState({
    company_Name: "",
    service_Type: "",
    city: "",
    description: "",
    zip_Code: "",
  });

  const history = useHistory()

  const HandleInputAndpost = (event) => {
    event.preventDefault();

    const copy = { ...services };
    let val = event.target.value;
    // if (event.target.id.includes("Id")) {
    //   val = parseInt(val);
    // }
    copy[event.target.id] = val;
    setServices(copy);
  };

  const handleSaveButton = (event) => {
    event.preventDefault();
    employerDataManager
      .employerPostService(services)
      .then(() => history.push("/sent_invitations") );
    setServices("");
  };

  return (
    
     <div className="send_invitations">

<h2>Request for Qualified Recruiters </h2>

    <form>
    <label>Company Name</label>
  <input
  className="send_input"
    type="text"
    id="company_Name"
    value={services.company_Name}
    onChange={HandleInputAndpost}
  />
   <label>Service Type</label>
  <input
  className="send_input"
    type="text"
    id="service_Type"
    value={services.service_Type}
    onChange={HandleInputAndpost}
  />
   <label>City</label>
  <input
  className="send_input"
    type="text"
    id="city"
    value={services.city}
    onChange={HandleInputAndpost}
  />
   

 

<textarea
rows="4"
cols="50"
  placeholder="Description"
    type="text"
    id="description"
    value={services.description}
    onChange={HandleInputAndpost}
  ></textarea>
  <div className="center-btn-employer-Service-Post">
  <Button className="button-style" variant="contained" onClick={handleSaveButton}>Send Request</Button>
  <Button className="button-style" style={{backgroundColor:"red"}} variant="contained" onClick={() => history.push("/")}>Cancel ❌</Button>
  </div>
  </form>
        
        </div>
  
  );
};
