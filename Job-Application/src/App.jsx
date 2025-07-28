import {useForm , Controller} from 'react-hook-form';

function App() {

  const{ control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(`Form submitted Successfully with data : ${JSON.stringify(data)}`);
  };

  return (
    <div>
      <div>JOB APPLICATION FORM</div>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>

        <Controller
            name = "email"
            control = {control}
            rules={
              {
                required : "Email is required",
                pattern : {
                  value :  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                  message : " Enter valid email.Example : admin123@gmail.com"
                }
              }
            }
            render={({field,fieldState:{error}})=>(
            <>
              <input 
              {...field}
              type='email'
              placeholder='Enter email address'
              />
              {error && <span>{error.message}</span>}
            </>
            )}
        />
          <br /><br />
        <Controller
            name="password"
            control={control}
            rules={
              {
                required : "Password is required",
                pattern : {
                  value : /^(?=.*[!@#$%^&*])/,
                  message : "Password must contain special charc"
                }
              }
            } 
            render={({field,fieldState : {error}})=>(
              <>
                <input 
                {...field}
                type='password'
                placeholder='Password'
                />
                {error && <span>{error.message}</span>}
              </>
            )}
          />
          <br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;