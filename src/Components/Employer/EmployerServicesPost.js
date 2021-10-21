import React, { useState } from "react";
import { useHistory } from "react-router";
import employerDataManager from "./EmployerDataManager";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
    <>
      <div className="Form-input">
        <h1>Request Recruiters</h1>
        <div className="input-styles">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0.5, width: "30ch" },
            }}
            noValidate
            autoComplete="off">
            <div>
              <TextField
                id="company_Name"
                label="Company Name"
                placeholder="Company Name"
                onChange={HandleInputAndpost}
                multiline
                maxRows={4}
                value={services.company_Name}
              />
              <TextField
                id="service_Type"
                label="Service Type"
                value={services.service_Type}
                onChange={HandleInputAndpost}
                placeholder="Service Type"
                multiline
              />
              <TextField
                id="description"
                label="Description"
                value={services.description}
                onChange={HandleInputAndpost}
                multiline
                rows={4}
                defaultValue=""
              />
            </div>
            <div>
              <TextField
                id="city"
                label="City"
                value={services.city}
                placeholder="City"
                onChange={HandleInputAndpost}
                multiline
                maxRows={4}
                variant="filled"
              />
              <TextField
                id="zip_Code"
                label="Zip Code"
                value={services.zip_Code}
                onChange={HandleInputAndpost}
                placeholder="ZipCode"
                multiline
                variant="filled"
              />
            </div>

            <div className="send-btn">
              <Button onClick={handleSaveButton} variant="contained">
                Send Request
              </Button>
            </div>
          </Box>
          <div className="">Comapany Name: {services.company_Name}</div>
          <div className="">Service Type: {services.service_Type}</div>
          <div className="">Description: {services.description}</div>
        </div>
      </div>
    </>
  );
};
