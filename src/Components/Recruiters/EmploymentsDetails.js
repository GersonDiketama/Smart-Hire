import React, { useState, useEffect } from 'react';
import recruiterManager from './RecruitersManager';
import { useParams, useHistory } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const EmployerDetail = () => {
  const [employerRequest, setEmployerRequest] = useState({ company_Name: "", service_Type: "", city:"", description:""});
  const [isLoading, setIsLoading] = useState(true);

  const {employerId} = useParams();
  const history = useHistory();


  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", employerId)
    recruiterManager.getEmployersResquestsById(employerId)
      .then(employer => {
        setEmployerRequest({
          company_Name: employer.company_Name,
          service_Type: employer.service_Type,
          city: employer.city,
          description:employer.description
        });
        setIsLoading(false);
      });
  }, [employerId]);

 
  

  return (
    <section className="employer_details">

    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography>
        <Typography variant="h6" component="div">
       Company Name:  <b>{employerRequest.company_Name}</b>
        </Typography>
        <br />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <h3>Service Type</h3>
        {employerRequest.service_Type}
        </Typography>
        <Typography variant="body2">
        Location: <b>{employerRequest.city}</b>
          <br />
        
        </Typography>
        <Typography gutterBottom>
            <h3>Description</h3>
        {employerRequest.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={() => history.push(`/invitations/${employerId}`)}>Send Invitation</Button>
      </CardActions>
    </Card>


    </section>


  );
}