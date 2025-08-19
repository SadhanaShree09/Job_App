import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function JobForm() {
  const [darkMode, setDarkMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert(`Job Application submitted Successfully!!\n${JSON.stringify(data, null, 2)}`);
  };

  // ✅ Fix: Use classList instead of assigning to class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-2xl mx-auto mt-5 rounded-lg shadow-lg mb-4 px-4 py-6">
        
        {/* Theme Switch */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1 text-sm rounded-md border dark:bg-gray-800 dark:text-white"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>

        {/* Title */}
        <h2 className={`text-3xl font-bold mb-6 text-center underline ${darkMode ? "text-white" : "text-gray-800"}`}>
          Job Application Form
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mx-3 pb-6">
          
          {/* Full Name */}
          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Full Name:
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-orange-300 focus:outline-none text-black"
              {...register("FullName", { required: "FullName is required" })}
              placeholder="Enter your full name"
            />
            {errors.FullName && <p className="text-red-500 text-sm mt-1">{errors.FullName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Email ID:
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-orange-300 focus:outline-none text-black"
              type="email"
              {...register("Email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email ID",
                },
              })}
              placeholder="Enter your Email ID"
            />
            {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Phone Number:
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-orange-300 focus:outline-none text-black"
              type="tel"
              {...register("Phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be only 10 digits",
                },
              })}
              placeholder="Enter your Phone Number"
            />
            {errors.Phone && <p className="text-red-500 text-sm mt-1">{errors.Phone.message}</p>}
          </div>

          {/* Position */}
          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Position:
            </label>
            <select
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-orange-300 focus:outline-none text-black"
              {...register("position", { required: "Position is required" })}
            >
              <option value="">Select a position</option>
              <option value="frontend developer">Frontend Developer</option>
              <option value="backend developer">Backend Developer</option>
              <option value="fullstack developer">Full Stack Developer</option>
              <option value="ui-ux designer">UI UX Designer</option>
              <option value="project manager">Project Manager</option>
            </select>
            {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>}
          </div>

          {/* Experience */}
          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Experience Level:
            </label>
            <div className="flex flex-col gap-2 pl-2">
              {["entry", "mid", "senior"].map((level) => (
                <label key={level} className={`flex items-center gap-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                  <input
                    type="radio"
                    {...register("experience", { required: "Select Experience Level" })}
                    value={level}
                  />
                  {level === "entry" && "Entry level (0-1 years)"}
                  {level === "mid" && "Middle Level (2-5 years)"}
                  {level === "senior" && "Senior Level (5+ years)"}
                </label>
              ))}
            </div>
            {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
          </div>

          {/* Resume Upload */}
          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Upload your Resume:
            </label>
            <input
              type="file"
              accept=".pdf"
              {...register("resume", {
                required: "Resume is required",
                validate: {
                  fileType: (files) => {
                    if (files.length === 0) return true;
                    const file = files[0];
                    return file.type === "application/pdf" || "Only PDF format is accepted";
                  },
                },
              })}
              className="w-full border border-gray-300 p-2 rounded-md bg-white text-black"
            />
            <p className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Only PDF format is accepted in the resume
            </p>
            {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>}
          </div>

          {/* Cover Letter */}
          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Cover Letter:
            </label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-orange-300 focus:outline-none text-black"
              {...register("cover", {
                maxLength: {
                  value: 500,
                  message: "Cover letter must be less than 500 letters",
                },
              })}
              placeholder="Tell us about yourself (Optional)"
              rows="4"
            />
            {errors.cover && <p className="text-red-500 text-sm mt-1">{errors.cover.message}</p>}
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <label className={`flex items-center ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              <input
                type="checkbox"
                {...register("agreeTerms", { required: "You must agree to the terms and conditions" })}
              />
              <span className="text-sm mx-2">
                I agree to the terms and conditions and am willing to accept an offer from your company.
              </span>
            </label>
          </div>
          {errors.agreeTerms && <p className="text-red-500 text-sm">{errors.agreeTerms.message}</p>}

          {/* Submit Button */}
          <button
            className="w-full py-2 px-4 bg-red-100 text-gray-800 rounded-md hover:bg-green-100 transition duration-200"
            type="submit"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default JobForm;