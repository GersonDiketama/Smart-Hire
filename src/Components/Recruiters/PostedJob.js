import React, {useState, useEffect} from 'react'
import recruiterManager from './RecruitersManager'
import PostedJobCard from './PostedJobCard'

const PostedJob = () => {

            const[postedJob, setPostedJob] = useState([])


            const getPostedJob = () =>
            {
                recruiterManager.getRecruiterJobPost()
                .then(res => setPostedJob(res))
            }

            useEffect(() => {
                getPostedJob()
            }, [])

    return (
        <div>
            {postedJob.map( jobs => <PostedJobCard key={jobs.id} jobs={jobs}/>)}
        </div>
    )
}






export default PostedJob
