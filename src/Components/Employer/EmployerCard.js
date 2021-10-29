
import React from "react";
import { useHistory } from "react-router";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const EmployerCard = ({ viewRequest, deletePost}) => {
  const history = useHistory();



  return (
    <div>

    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
        {viewRequest.company_Name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {viewRequest.service_Type}
        </Typography>
        <Typography variant="body2">
        {viewRequest.city}
          <br />
        </Typography>
        <Typography>{viewRequest.description}</Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" onClick={() => deletePost(viewRequest.id)}>
        Delete
      </Button>
      <Button
        variant="contained"
        onClick={() =>
          history.push(`/sent_invitations/${viewRequest.id}/edit`)
        }>
        Edit
      </Button>
      </CardActions>
    </Card>

    </div>
  );
};

export default EmployerCard;
