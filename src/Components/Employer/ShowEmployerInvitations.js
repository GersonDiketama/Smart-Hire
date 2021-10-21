import React, { useState, useEffect } from "react";
import employerDataManager from "./EmployerDataManager";
import EmployerCard from "./EmployerCard";

const ShowEmployerInvitations = () => {
  const [sentRequest, setSentRequest] = useState([]);

  const getEmployerSentRequests = () => {
    employerDataManager
      .getEmployerSentRequest()
      .then((datas) => setSentRequest(datas));
  };

  const deleteEmployerRequest = (deleteId) => {
    employerDataManager
      .deleteEmployerPost(deleteId)
      .then(() => getEmployerSentRequests());
  };

  

  useEffect(() => {
    getEmployerSentRequests();
  }, []);

  return (
    <div>
      {sentRequest.map((viewRequest) => (
        <EmployerCard key={viewRequest.id} viewRequest={viewRequest} deletePost={deleteEmployerRequest}/>
      ))}
    </div>
  );
};

export default ShowEmployerInvitations;
