import { url } from "../Recruiters/RecruitersManager";

const employerDataManager = {
  //GET EMPLOYER BY ID
  getEmployerPostById: (employerPostId) => {
    return fetch(`${url}/employerRequests/${employerPostId}`).then((res) =>
      res.json()
    );
  },

  //GET
  getEmployerSentRequest: () => {
    return fetch(`${url}/employerRequests`).then((res) => res.json());
  },

  //DELETE EMPLOYER POSTS
  deleteEmployerPost: (employerId) => {
    return fetch(`${url}/employerRequests/${employerId}`, {
      method: "DELETE",
    }).then((res) => res.json());
  },
  //this fetch will be used to get the invitations the recruiter may send
  getRecruitersInvitations: () => {
    return fetch(`${url}/`).then((res) => res.json());
  },

  //POST
  employerPostService: (PostService) => {
    return fetch(`${url}/employerRequests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(PostService),
    }).then((res) => res.json());
  },

  editEmployerPost: (postId) => {
    return fetch(`${url}/employerRequests/${postId.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postId),
    }).then((res) => res.json());
  },



  // Handle video call 
  videoCalling: (id) =>

  {
    return fetch(`${url}/recruiterInvitation/${id}`,{
      method:"PATCH",
      body: JSON.stringify({
        videCall: true
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
  }


};

export default employerDataManager;
