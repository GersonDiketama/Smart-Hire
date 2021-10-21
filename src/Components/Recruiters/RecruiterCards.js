import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import recruiterManager from "./RecruitersManager";
const RecruiterCards = ({ data, setSelectedCompany, selectedCompany }) => {
    <h2 className="card_header">Clients Requests</h2>
  return (
    <div>
      <Button onClick={() => setSelectedCompany(data)} variant="contained">
        <section>
          <h1>{data.company_Name}</h1>
          <p>{data.service_Type}</p>
        </section>
      </Button>

      <div>
    {selectedCompany ? (
        <CompanyDetails key={data.id} company={selectedCompany} />
      ) : (
        ""
      )}
      </div>
      
    </div>
 
  );
};

const CompanyDetails = ({ company }) => {
  const [companyDetails, setComapanyDetails] = useState(null);

  useEffect(() => {
    recruiterManager
      .getEmployersResquestsById(company.id)
      .then((employerDatas) => setComapanyDetails(employerDatas));
  }, [company]);

  if (!companyDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {companyDetails && (
        <>
          <h3>{companyDetails.service_Type}</h3>
          <Button variant="contained">Send Invitation</Button>
        </>
      )}
    </div>
  );
};

export default RecruiterCards;
