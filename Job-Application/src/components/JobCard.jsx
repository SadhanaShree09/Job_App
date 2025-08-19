import { useNavigate } from 'react-router-dom';

function JobCard({ job,appliedJobs,onViewDetails}) {

    const isApplied = appliedJobs.includes(job.id);

  return (
    <div>
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
        <h3>{job.title}</h3>
        <p>{job.company} - {job.type}</p>
        <p>Salary: {job.salary}</p>
        </div>

        <div>
            <button onClick={() => onViewDetails(job)}>
                Apply
            </button>
        </div>
    </div>
  );
}

export default JobCard;
