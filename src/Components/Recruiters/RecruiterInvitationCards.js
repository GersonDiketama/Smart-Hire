import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const RecruiterInvitationCards = ({ viewSolicitations }) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom></Typography>
          <Typography variant="h5" component="div">
            Name: {viewSolicitations.recruiter_name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Years of Experience: {viewSolicitations.years_of_experience}
          </Typography>
          <Typography variant="body2">
            City: <b>{viewSolicitations.state}</b>
            <br />
          </Typography>
          <Typography>
              <b>Description:</b> {viewSolicitations.description}
            </Typography>
          <Typography>

             Phone: <b>{viewSolicitations.phone}</b>
            </Typography>
        </CardContent>
        <CardActions>
          {viewSolicitations.isAccepted === true ? (
            <Button style={{ backgroundColor: "green" }} variant="contained">
              Solicitation Accepted
            </Button>
          ) : (
            <Button variant="contained">In Progress...</Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default RecruiterInvitationCards;
