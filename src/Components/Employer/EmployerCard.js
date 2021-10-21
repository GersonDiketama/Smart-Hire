import { Button } from "@mui/material";
import React,{useEffect} from "react";
import { useHistory } from "react-router";

const EmployerCard = ({ viewRequest, deletePost}) => {
  const history = useHistory();



  return (
    <div>
      <div>
        <h1>Sent Requests</h1>
      </div>

      <h3>{viewRequest.company_Name}</h3>
      <p>{viewRequest.service_Type}</p>
      <p>{viewRequest.city}</p>
      <p>{viewRequest.description}</p>
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
    </div>
  );
};

export default EmployerCard;
