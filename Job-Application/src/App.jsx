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
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>Name : </label>
    <input
    {...register('Name',{required: 'Name is required'})}
    placeholder='Enter your name'
    />
    {errors.Name && (
      <p className='text-red-500'>{errors.Name.message}</p>
    )}
    <button type='Submit'>Submit</button>
    </form>
  )
}

export default App;