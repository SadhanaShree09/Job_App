import { useForm } from 'react-hook-form';

function App() {

  const {
    register,
    handleSubmit,
    formState : {errors},
  } = useForm();

  const onSubmit=(data) =>{
    console.log('Form Data : ',data);
    alert(`Job Application submitted Successfully!!\n${JSON.stringify(data,null,2)}`);
  }

  return (
    <div className='text-center mt-10'>
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div >
          <label>FullName : </label>
          <input
            {...register('FullName',{required: 'FullName is required'})}
            placeholder='Enter your full name'
          />
          {errors.FullName && (
            <p className='text-red-500'>{errors.FullName.message}</p>
          )}
        </div>
        
        <div>
          <label>Email ID : </label>
          <input type='email' 
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
            <p className='text-red-500'>{errors.Email.message}</p>
          )}
        </div>
        
        <div>
          <label>Phone Number : </label>
          <input type="tel"
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
            <p className='text-red-500'>{errors.Phone.message}</p>
          )}
        </div>
        
        <div>
          <label>Position : </label>
          <select {...register('position', {required : 'Postion is required'})}>
            <option value="">Select a position</option>
            <option value="frontend developer">Frontend Developer</option>
            <option value="backend developer">Backend Developer</option>
            <option value="fullstack developer">Full Stack Developer</option>
            <option value="ui-ux designer">UI UX designer</option>
            <option value="project manager">Project Manager</option>
          </select>
          {errors.position && (
            <p className='text-red-500'>{errors.position.message}</p>
          )}
        </div>
        
        <div>
          <label>Experience Level</label>
          <div >
            <label>
              <input type="radio"
              {...register('experience',{required:'Select Experience Level'})} 
              value='entry'
              />
              Entry level(0-1 years)
            </label>
            <label>
              <input type="radio"
              {...register('experience',{required:'Select Experience Level'})}
              value='mid' 
              />
              Middle Level(2-5 years)
            </label>
            <label>
              <input type="radio"
              {...register('experience',{required:'Select Experience Level'})}
              value='senior'
              />
              Senior Level(5+ years)
            </label>
          </div>
          {errors.experience &&(
            <p className='text-red-500'>{errors.experience.message}</p>
          )}
        </div>

        <div>
          <label>Upload your Resume</label>
          <input type="file"
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
          />
          <p>Only PDF format is accepted in the resume</p>
          {errors.resume && (
            <p className='text-red-500'>{errors.resume.message}</p>
          )}
        </div>

        <div>
          <label>Cover Letter</label>
          <textarea
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
            <p className='text-red-500'>{errors.cover.message}</p>
          )}
        </div>

        <div>
          <label>
           <input
            type='checkbox'
            {...register('agreeTerms',{
              required:'Agree the terms and Conditions'
            })}
           />
           <span>I Agree the terms and conditions and willing to get offer in your company.</span>
          </label>
          {errors.agreeTerms && (
            <p className='text-red-500'>{errors.agreeTerms.message}</p>
          )}
        </div>
        
        <button type='submit'>Submit Application</button>
      
      </form>
    </div>
  );
}

export default App;