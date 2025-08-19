import JobCard from './JobCard'

function JobList({jobs,appliedJobs,onViewDetails}) {
  return (
    <div>
        {jobs.length > 0 ? (
            jobs.map((job) => (
                <JobCard key={job.id} job={job} appliedJobs={appliedJobs} onViewDetails={onViewDetails}/>
            ))
        ) : (
            <p>No jobs Available</p>
        )}
    </div>
  )
}

export default JobList