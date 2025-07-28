import {useForm} from 'react-hook-form';

function App() {

  const{ register, handleSubmit,formState : {errors} } = useForm();

  const onSubmit = (data) => {
    alert(`Form submitted Successfully with data : ${JSON.stringify(data)}`);
  };

  return (
    <div>
      <div>JOB APPLICATION FORM</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {
          ...register("firstName",{required : true})
        } 
        placeholder='Enter the First Name'
        />
        {errors.firstName && <span>This filed is Required</span>}
        <br />

        <input {
          ...register("lastName",{required : true})
        }
        placeholder='Enter the lastName' 
        />
        {errors.lastName && <span>This filed is Required</span>}
        <br />
        <select {...register('gender')}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select> 
        <br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;