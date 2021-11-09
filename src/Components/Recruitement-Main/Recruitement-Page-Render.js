import React,{useState} from "react";
import RecruitersViews from "../Recruiters/RecruitersViews";
import { EmployerViews } from "../Employer/EmployerViews";
import { Login } from "../Authentication/Login";
import { Route } from "react-router";
import { Register } from "../Authentication/Register";
import EmployeeViews from "../Employees/EmployeeViews";


function Recruitement() {
const[userType, setUserType] = useState(sessionStorage.getItem("userTypeKey"))
  // const userType = sessionStorage.getItem("userTypeKey")

  const isUserType = () =>
  {
    setUserType(sessionStorage.getItem("userTypeKey"))
  }

  return (
    <div className="App">

      <Route exact path="/login">
      <Login isUserType={isUserType}/>
      </Route>

      <Route exact path="/register">
      <Register/>
      </Route>

    {userType === "1" ? <RecruitersViews/>:""}

    {/* Checking if the userType is either Employer or Recruiter */}
      {userType === "2" ? <EmployerViews/> : ""}

      {/* employee view */}
      {userType === "3" ? <EmployeeViews/>:""}
     
    </div>
  );
}

export default Recruitement;
