import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import "./recruiterStyle.css"


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

const RecruiterCards = ({ data, setSelectedCompany, selectedCompany }) => {

  
      <h2 className="card_header">Clients Requests</h2>

        const history = useHistory()

      

  return (
    <div className="get_Employer_Service_Post">
  
    <Card sx={{ minWidth: -29 }} variant="outlined">
      <CardContent>
        {/* <Typography component="div" variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        {data.company_Name}
        </Typography> */}
        <Typography variant="h5" component="div">
        {data.company_Name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.service_Type}
        </Typography>
        <Typography variant="body2">
          {data.description}
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => history.push(`${data.id}`) } variant="contained">More Information</Button>
      </CardActions>
    </Card>
  

      
    </div>
 
  );
};



export default RecruiterCards;
