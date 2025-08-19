import React, { useState } from 'react';
import JobFilter from '../components/JobFilter';
import JobList from '../components/JobList';
import useJobs from '../hooks/useJobs';
import JobForm from '../components/JobForm';

function Jobs() {
  const {filteredJobs,appliedJobs,applyToJob,filterJobs} = useJobs();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [selectedJob,setSelectedJob] = useState(null);
  const [showApplicationForm,setApplicationForm] = useState(false);

  const handleApply = (jobId) => applyToJob(jobId) ;
  const handleViewDetails = (job) => {setSelectedJob(job); setApplicationForm(true)};
  const handleApplicationSubmit = (jobId) => {applyToJob(jobId); setApplicationForm(false); setSelectedJob(null)};
  const handleCloseForm = () => {setApplicationForm(false); setSelectedJob(null)}; 

  return (
    <div>
      <h1>Job Listing</h1>
      <JobFilter search={search} setSearch={setSearch} type={type} setType={setType} onFilter={filterJobs} />
        <div>
            <p>Found : {filteredJobs.length} jobs</p>
            <p>Applied : {appliedJobs.length} jobs</p>
        </div>

      <JobList jobs={filteredJobs} appliedJobs={appliedJobs} onApply={handleApply} onViewDetails={handleViewDetails}/>
      {showApplicationForm && selectedJob && (
        <JobForm job={selectedJob} onClose={handleCloseForm} onSubmit={handleApplicationSubmit}/>
      )}
    </div>
  );
}

export default Jobs;
