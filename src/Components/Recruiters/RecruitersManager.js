export const url = "http://localhost:8088";

const recruiterManager = {


    getEmployersResquests: () => {
    return fetch(`${url}/employerRequests`).then((res) => res.json());
  },

  getEmployersResquestsById: (employerRequestId) => {
    return fetch(`${url}/employerRequests/${employerRequestId}`).then((res) =>
      res.json()
    );
  },

  //THIS SECTION IS FOR RECRUITER'S INVITATIONS 

//POST
  recruiterInvitation: (invitations) => {
    return fetch(`${url}/recruiterInvitation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invitations)
    }).then((res) => res.json());
  },

//GET FOR EMPLOYER TO SEE ALL THE INVITATIONS FROM THE RECRUITER    

getRecruiterInvitations: () =>
{
    return fetch(`${url}/recruiterInvitation`)
    .then(res => res.json())
},

getRecruiterInvitationById: (recruiterId) =>
{
    console.log(recruiterId)
    return fetch(`${url}/recruiterInvitation/${recruiterId}`)
    .then(res => res.json())
},

//EDIT THE BOOLEAN IN THE DATABASE OF RECRUITER INVITATION
editInvitation: (invitationsId) => {
    console.log(invitationsId)
    return fetch(`${url}/recruiterInvitation/${invitationsId.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invitationsId)
    }).then((res) => res.json());
  },

  acceptInvitation: (id) =>
  {
      return fetch(`${url}/recruiterInvitation/${id}`,{
          method:"PATCH",
          body: JSON.stringify({
              isAccepted: true
          }),
          headers: {
              "Content-Type":"application/json"
          }
      })
      .then(res => res.json())
  },


  //Recruiter Job Post

  recruiterJobPost: (jobPost) =>
  {
      return fetch(`${url}/recruiterJobPosts`, 
      {
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify(jobPost)
      }
      )
      .then(res => res.json())
  },



  //Get Recruiter Job Post

  getRecruiterJobPost: () =>
  {
      return fetch(`${url}/recruiterJobPosts`)
      .then(res => res.json())
  }

};

export default recruiterManager;
