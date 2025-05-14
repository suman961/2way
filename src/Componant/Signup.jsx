import React from 'react'
import {nanoid} from 'nanoid'
import { useForm } from 'react-hook-form';


    const Signup = ({toggler, setToggler, users, setUsers}) =>{
        const {register,handleSubmit,reset}=useForm()

    const submitHandler = (data)=>{
      if(!Array.isArray(users)){
        alert("Error:userlist not initialize properly.");
        return;
      }
      const alreadyExists = users.some((users)=> users.Email === data.Email);
      if(alreadyExists){
        alert("❗already signIN❗");
        return;
      }
      data.id = nanoid();
      const updateUsers = [...users, data];
      setUsers(updateUsers);

      alert("signUP successfully✅");
      reset()
      }
       
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)} className='h-100vh p-20'>
          <h1 className='text-4xl p-10 font-bold'>Hello let's go to the shope</h1>
          <input {...register("name")} className='outline-0 border-0 text-2xl text-black font-light' type="text" placeholder='enter your name' required/><hr />
          <input {...register("Email")} className='outline-0 border-0 text-2xl text-black font-light' type="Email" placeholder='enter email' required/><hr />
          <input {...register("password")} className='outline-0 border-0 text-2xl text-black font-light' type="password" placeholder='********' required/><hr />
          <button className='rounded-2xl mt-2 p-2 text-2xl bg-blue-700  ' type='submit'>signUP</button><br />
          <small className='text-xl '>already have an account?
          <button className=' text-blue-700 font-bold ml-2' type='button' onClick={()=>{setToggler(!toggler)}}>signIn</button></small>
        </form>
    </div>
  )
}
export default Signup
