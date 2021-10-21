import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router'
import employerDataManager from './EmployerDataManager'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const EditEmployerPost = () => {

    const[editPost, setEditPost] = useState({
        company_Name:"",
        service_Type:"",
        city:"",
        description:"",
        zip_Code:""
    })

    const history = useHistory()
    const{viewRequestId} = useParams()


    const handleFields = event =>
    {
        const copy = {...editPost}
        copy[event.target.id] = event.target.value
        setEditPost(copy)
    }

    const updateEmployerPost = event =>
    {
        event.preventDefault()

        const postToUpdate = {
            id:viewRequestId,
            company_Name: editPost.company_Name,
            service_Type : editPost.service_Type,
            city : editPost.city,
            description: editPost.description,
            zip_Code: editPost.zip_Code
        }

        employerDataManager.editEmployerPost(postToUpdate)
        .then(() => history.push("/sent_invitations"))
    }

    useEffect(() =>
    {
        employerDataManager.getEmployerPostById(viewRequestId)
        .then(post => setEditPost(post))
    },[])

    return (
        <>
          <div className="Form-input">
            <h1>Edit Your Services Request</h1>
            <div className="input-styles">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 0.5, width: "30ch" },
                }}
                noValidate
                autoComplete="off">
                <div>
                  <TextField
                    id="company_Name"
                    label="Company Name"
                    onChange={handleFields}
                    multiline
                    maxRows={4}
                    value={editPost.company_Name}
                  />
                  <TextField
                    id="service_Type"
                    label="Service Type"
                    value={editPost.service_Type}
                    onChange={handleFields}
                    placeholder="Placeholder"
                    multiline
                  />
                  <TextField
                    id="description"
                    label="Description"
                    value={editPost.description}
                    onChange={handleFields}
                    multiline
                    rows={4}
                    defaultValue=""
                  />
                </div>
                <div>
                  <TextField
                    id="city"
                    label="City"
                    value={editPost.city}
                    placeholder="City"
                    onChange={handleFields}
                    multiline
                    maxRows={4}
                    variant="filled"
                  />
                  <TextField
                    id="zip_Code"
                    label="Zip Code"
                    value={editPost.zip_Code}
                    onChange={handleFields}
                    placeholder="ZipCode"
                    multiline
                    variant="filled"
                  />
                </div>
    
                <div className="send-btn">
                  <Button onClick={updateEmployerPost} variant="contained">
                    Save
                  </Button>
                </div>
              </Box>
            </div>
          </div>
        </>
      );
}

export default EditEmployerPost
