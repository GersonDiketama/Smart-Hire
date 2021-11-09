import React, { useState, useEffect, useRef } from "react";
import recruiterManager from "../Recruiters/RecruitersManager";
import employerDataManager from "./EmployerDataManager";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const RecruiterSolicitationCard = ({
  getRecruiterSolicitation,
  recruiterSolicitations,
}) => {
  const [accepted, setAccepted] = useState([]);
  
  const [playing, setPlaying] = useState(JSON.parse(localStorage.getItem("isPlaying")));

  const [videoChat, setVideoChat] = useState([]);

  console.log(accepted);

  console.log(playing)

  const handleAcceptedInvitation = (id) => {
    recruiterManager.acceptInvitation(id).then(() =>
      recruiterManager
        .getRecruiterInvitations() 
        .then((res) => setAccepted(res))
        .then(() => getRecruiterSolicitation())
    );
  };

  useEffect(() => {localStorage.setItem("isPlaying", false)},[])




  useEffect(() => {
    setPlaying(localStorage.getItem("isPlaying"));
  }, [JSON.parse(localStorage.getItem("isPlaying"))]);

  const startVideo = () => {
      
     
    localStorage.setItem("isPlaying", true);
    const json_parse = JSON.parse(localStorage.getItem("isPlaying"))
    setPlaying(json_parse)
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };



  //Recruiter's video

  const recruiterVideo = () =>
  {
    navigator.getUserMedia(
        {
          video: true,
        },
        (stream) => {
          let video = document.getElementsByClassName("app__videoFeed")[0];
          if (video) {
            video.srcObject = stream;
          }
        },
        (err) => console.error(err)
      );

      
  }

  //Useeffect for recruiter's video

  


  const stopVideo = () => {

    localStorage.setItem("isPlaying", false);
    setPlaying(JSON.parse(localStorage.getItem("isPlaying")))
    // let video = document.getElementsByClassName("app__videoFeed")[0];
    // video.srcObject.getTracks()[0].stop();
    

  
  };

  //This useeffect is watching for change made in playing
  

  //This useeffect watch for stop video

  useEffect(() => {
    recruiterManager.getRecruiterInvitations().then((res) => setAccepted(res));
  }, []);

  return (
    
    <div>
        
      {/* Employer */}
      {parseInt(sessionStorage.getItem("userTypeKey")) === 2 ? (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom></Typography>
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
            <Typography>
              Description: {recruiterSolicitations.description}
            </Typography>
            <Typography>
              Phone Number: {recruiterSolicitations.phone}
            </Typography>
          </CardContent>
          <CardActions>
            {recruiterSolicitations.isAccepted === false ? (
              <Button
                key={recruiterSolicitations.id}
                variant="contained"
                onClick={() =>
                  handleAcceptedInvitation(recruiterSolicitations.id)
                }>
                Accept Invitation
              </Button>
            ) : (
              <Button variant="contained" style={{ backgroundColor: "green" }}>
                Accepted ✔
              </Button>
            )}
            <Button variant="contained">Send Message(coming soon...)</Button>
            <video autoPlay className="app__videoFeed"></video>

            <div className="app__input">
              {playing ? (
                <Button variant="contained" onClick={() => stopVideo()}>
                  Stop
                </Button>
              ) : (
                <Button variant="contained" onClick={() => startVideo()}>
                  Start
                </Button>
              )}

        
            </div>
          </CardActions>
        </Card>
      ) : (
        ""
      )}

      <div>
        {/* Recruiter */}

        {parseInt(sessionStorage.getItem("userTypeKey")) === 1 ? (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom></Typography>
              <Typography variant="h5" component="div">
                Recruiter's Name: {recruiterSolicitations.recruiter_name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Years of experience:{" "}
                {recruiterSolicitations.years_of_experience}
              </Typography>
              <Typography variant="body2">
                State: {recruiterSolicitations.state}
                <br />
              </Typography>
              <Typography>
                Description: {recruiterSolicitations.description}
              </Typography>
              <Typography>
                Phone Number: {recruiterSolicitations.phone}
              </Typography>
            </CardContent>
            <CardActions>
              {recruiterSolicitations.isAccepted === true ? (
                <Button
                  variant="contained"
                  style={{ backgroundColor: "green" }}>
                  Solicitation Accepted
                </Button>
              ) : (
                <Button variant="contained">In Progress...</Button>
              )}
              <Button variant="contained">Send Message(coming soon...)</Button>

              <video autoPlay className="app__videoFeed"></video>

            {JSON.parse(localStorage.getItem("isPlaying")) === true ?  recruiterVideo() : <Button variant="contained" onClick={() => stopVideo()}>
                  Stop
                </Button>}
            </CardActions>
          </Card>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RecruiterSolicitationCard;
