import React from 'react'

const JobList = ({ jobList }) => {
  return (
    <div>
      <center><h1>Job List</h1></center>
      {jobList.map((job) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{job.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{job.email}</h6>
            <p class="card-text">{job.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default JobList