import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



const PostedJobCard = ({jobs}) => {
    return (
        <div>
            

            <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom></Typography>
          <Typography variant="h5" component="div">
            Name: {jobs.Company_Name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Years of Experience: {jobs.Job_Title}
          </Typography>
          <Typography variant="body2">
            City: <b>{jobs.state}</b>
            <br />
          </Typography>
          <Typography>
              <b>Description:</b> {jobs.Job_Description}
            </Typography>
          <Typography>

             Phone: <b>{jobs.Requirements}</b>
            </Typography>
        </CardContent>
        <CardActions>
         
            <Button style={{ backgroundColor: "green" }} variant="contained">
              Delete
            </Button>
         
            <Button variant="contained">Edit</Button>
            
        </CardActions>
      </Card>


        </div>
    )
}

export default PostedJobCard
