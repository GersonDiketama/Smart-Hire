import React, { useState, useEffect } from "react";
import recruiterManager from "./RecruitersManager";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";

const RecruiterJobPost = () => {
  const [jobPost, setJobPost] = useState({
    Company_Name: "",
    Job_Title: "",
    Job_Description: "",
    Requirements: "",
  });

  const history = useHistory();

  const handleInput = (event) => {
    event.preventDefault();
    const copy = { ...jobPost };
    copy[event.target.id] = event.target.value;

    setJobPost(copy);
  };

  const handleSaveButton = (event) => {
    recruiterManager.recruiterJobPost(jobPost).then(() => history.push("/"));
  };

  return (
    <div className="send_invitations">
      <label>Company Name</label>
      <input
      className="send_input"
        type="text"
        id="Company_Name"
        value={jobPost.Company_Name}
        onChange={handleInput}
      />
      <label>Job Title</label>
      <input
      className="send_input"
        type="text"
        id="Job_Title"
        value={jobPost.Job_Title}
        onChange={handleInput}
      />
      <label>Job Description</label>
      <input
      className="send_input"
        type="text"
        id="Job_Description"
        value={jobPost.Job_Description}
        onChange={handleInput}
      />
      <label>Requirements</label>
      <input
      className="send_input"
        type="text"
        id="Requirements"
        value={jobPost.Requirements}
        onChange={handleInput}
      />
      <Button className="button-style" variant="contained" onClick={() => handleSaveButton()}>Post Job</Button>
    </div>
  );
};

export default RecruiterJobPost;
