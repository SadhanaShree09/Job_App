import { useEffect, useState } from 'react';

function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const jobData = [
        { id: 1, title: "Frontend Developer", company: "Tech Co", location: "Remote", type: "Full-time", salary: "8 LPA" },
        { id: 2, title: "Backend Developer", company: "Data Inc", location: "Chennai", type: "Part-time", salary: "5 LPA" },
        { id: 3, title: "Full Stack Developer", company: "StartupXYZ", location: "Bangalore", type: "Full-time", salary: "10LPA" },
        { id: 4, title: "UI/UX Designer", company: "Design Studio", location: "Mumbai", type: "Internship", salary: "9LPA" }
    ];

  useEffect(() => {
        setJobs(jobData);
        setFilteredJobs(jobData);
    }, []);


    const filterJobs = (search, type) => {
    const query = search.toLowerCase();

        setFilteredJobs(
        jobs.filter(
        (job) =>
            (job.title.toLowerCase().includes(query) ||
            job.company.toLowerCase().includes(query)) &&
            (!type || job.type === type)
        )
    );
    };

  const applyToJob = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  return { jobs, filteredJobs, appliedJobs, applyToJob,filterJobs };
}

export default useJobs;
