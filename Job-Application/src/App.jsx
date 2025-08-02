import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState : {errors},
  } = useForm();

  const onSubmit=(data) =>{
    console.log('Form Data : ',data);
    alert(`Job Application submitted Successfully!!\n${JSON.stringify(data,null,2)}`);
  }

  useEffect(() => {
    document.documentElement.class = darkMode ? "dark" : "";
  }, [darkMode]);

  return(
    <div className={` ${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"} `}>
      <div className="max-w-2xl mx-auto mt-5 rounded-lg shadow-lg mb-4 px-4 py-6">
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 text-sm rounded-md border dark:bg-gray-800 dark:text-white"
        > Switch Theme </button>  
        <div className="flex justify-between items-center mb-4"> 
      </div>

      <h2 className={`text-3xl font-bold mb-6 text-center underline ${darkMode ? 'text-white' : 'text-gray-800'}`}>Job Application Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 mx-3 pb-6 bg'>
          <div className=''>
            <label className={`block text-md font-medium mb-1 ${darkMode ? 'text-white-300' : 'text-gray-700'}`}>FullName : </label>
            <input
              className='w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-orange-300 focus:outline-none text-black'
              {...register('FullName',{required: 'FullName is required'})}
              placeholder='Enter your full name'
            />
            {errors.FullName && (
              <p className='text-red-500 text-sm mt-1'>{errors.FullName.message}</p>
            )}
          </div>
          
          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email ID : </label>
            <input className='w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-orange-300 focus:outline-none text-black' 
            type='email' 
            {...register('Email',
              {required:'Email is required',
                pattern:{
                  value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:'Invalid Email ID'
                },
            })}
            placeholder='Enter yout Email ID'
            />
            {errors.Email &&(
              <p className='text-red-500 text-sm mt-1'>{errors.Email.message}</p>
            )}
          </div>
          
          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone Number : </label>
            <input className='w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-orange-300 focus:outline-none text-black' 
            type="tel"
            {...register('Phone',{
              required : "Phone number is required",
              pattern :{
                value : /^[0-9]{10}$/,
                message : "Phone number must be only 10 digits"
              },
            })}
            placeholder='Enter you Phone Number'
            />
            {errors.Phone &&(
              <p className='text-red-500 text-sm mt-1'>{errors.Phone.message}</p>
            )}
          </div>
          
          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Position : </label>
            <select className= 'w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-orange-300 focus:outline-none text-black'
            {...register('position', {required : 'Postion is required'})}>
              <option value="">Select a position</option>
              <option value="frontend developer">Frontend Developer</option>
              <option value="backend developer">Backend Developer</option>
              <option value="fullstack developer">Full Stack Developer</option>
              <option value="ui-ux designer">UI UX designer</option>
              <option value="project manager">Project Manager</option>
            </select>
            {errors.position && (
              <p className='text-red-500 text-sm mt-1'>{errors.position.message}</p>
            )}
          </div>
          
          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Experience Level</label>
            <div className='flex flex-col gap-2 pl-2'>
              <label className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <input  
                type="radio"
                {...register('experience',{required:'Select Experience Level'})} 
                value='entry'
                />
                Entry level (0-1 years)
              </label>
              <label className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <input type="radio"
                {...register('experience',{required:'Select Experience Level'})}
                value='mid' 
                />
                Middle Level (2-5 years)
              </label>
              <label className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <input type="radio"
                {...register('experience',{required:'Select Experience Level'})}
                value='senior'
                />
                Senior Level (5+ years)
              </label>
            </div>
            {errors.experience &&(
              <p className='text-red-500 text-sm mt-1'>{errors.experience.message}</p>
            )}
          </div>

          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Upload your Resume</label>
            <input 
            type="file"
            accept='.pdf'
            {...register('resume',{
              required:'Resume is required',
              validate :{
                fileType : (files) =>{
                  if(files.length===0) 
                    return true;
                  const file = files[0];
                  const allowedType = ['application/pdf'];
                  return allowedType.includes(file.type) || 'Only Pdf format is accepted';
                }
              }
            })} 
            className='w-full border border-gray-300 p-2 rounded-md bg-white text-black'
            />
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Only PDF format is accepted in the resume</p>
            {errors.resume && (
              <p className='text-red-500 text-sm mt-1'>{errors.resume.message}</p>
            )}
          </div>

          <div>
            <label className={`block text-md font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Cover Letter</label>
            <textarea className='w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-orange-300 focus:outline-none text-black'
            {...register('cover',{
              maxLength :{
                value : 500,
                message : 'Cover letter must be less than 500 letters'
              }
            })}
            placeholder='Tell us about you . But this is Optional'
            rows='4'
            />
            {errors.cover && (
              <p className='text-red-500 text-sm mt-1'>{errors.cover.message}</p>
            )}
          </div>

          <div className='flex items-start gap-2'>
            <label className={`block text-md font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <input
              type='checkbox' 
              {...register('agreeTerms',{
                required:'Agree the terms and Conditions'
              })}
            />
            <span className={`text-sm mx-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>I Agree the terms and conditions and willing to get offer in your company.</span>
            </label>
          </div>
          {errors.agreeTerms && (
              <p className='text-red-500 text-sm'>{errors.agreeTerms.message}</p>
          )}
          
          <button 
          className='w-full p-1 py-2 px-4 bg-red-100 text-gray-800 rounded-md hover:bg-green-100 transition duration-200'
          type='submit'
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;