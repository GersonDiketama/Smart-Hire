import React from "react";
import RecruitersViews from "../Recruiters/RecruitersViews";
import { EmployerViews } from "../Employer/EmployerViews";


function Recruitement() {
  return (
    <div className="App">
      <RecruitersViews/>
      
      {/* employer views should added here, so all the content can be displayed. */}
      <EmployerViews/>
    </div>
  );
}

export default Recruitement;
