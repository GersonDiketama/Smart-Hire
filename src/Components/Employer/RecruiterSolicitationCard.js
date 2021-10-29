import React, { useState, useEffect } from "react";
import { useRef } from "react";
import recruiterManager from "../Recruiters/RecruitersManager";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const RecruiterSolicitationCard = ({getRecruiterSolicitation, recruiterSolicitations }) => {
  const [accepted, setAccepted] = useState([]);

  console.log(accepted);

  const handleAcceptedInvitation = (id) => {
    recruiterManager
      .acceptInvitation(id)
      .then(() =>
        recruiterManager
          .getRecruiterInvitations()
          .then((res) => setAccepted(res))
          .then(() => getRecruiterSolicitation())
      );
  };


  const videoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
    }

  useEffect(() => {
    recruiterManager.getRecruiterInvitations().then((res) => setAccepted(res));
  }, []);

  useEffect(() => {})

  return (
    <div>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
        Recruiter's Name: {recruiterSolicitations.recruiter_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Years of experience: {recruiterSolicitations.years_of_experience}
        </Typography>
        <Typography variant="body2">
        State: {recruiterSolicitations.state}
          <br />
          
        </Typography>
        <Typography>Description: {recruiterSolicitations.description}</Typography>
        <Typography>Phone Number: {recruiterSolicitations.phone}</Typography>
      </CardContent>
      <CardActions>
      {recruiterSolicitations.isAccepted === false? <Button
              key={recruiterSolicitations.id}
              variant="contained"
              onClick={() =>
                handleAcceptedInvitation(recruiterSolicitations.id)
              }>
              Accept Invitation
            </Button>: <Button variant="contained" style={{backgroundColor:"green"}}>Accepted ✔</Button>}
            <Button variant="contained">Send Message(coming soon...)</Button>
            <Button variant="contained" onClick={() => getVideo()}>Call Recruiter</Button>
            <video ref={videoRef}/>
        <canvas />
       

      </CardActions>
    </Card>



    </div>
  );
};

export default RecruiterSolicitationCard;
