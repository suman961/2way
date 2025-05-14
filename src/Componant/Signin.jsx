   import { useForm } from "react-hook-form";
   import { nanoid } from "nanoid";

   const Signin = ({toggler, setToggler, users, setUsers}) =>{
    const {register,handleSubmit,reset}=useForm()

   const submitHandler = (data)=>{
              data.id=nanoid();
              console.log(data)
              const copyUsers=[...users]
              copyUsers.push(data)
              setUsers(copyUsers)
              reset()
            }
    
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)} className='h-100vh p-20'>
          <h1 className="text-3xl font-bold p-10 "> Get back to them</h1>
          
          <input {...register("Email")} className='outline-0 border-0 font-light text-2xl text-black' type="Email" placeholder='enter email' /><hr />
          <input {...register("password")} className='outline-0 border-0 font-light text-2xl text-black' type="password" placeholder='********' /><hr />
          <button className='rounded-2xl p-2 mt-2 bg-blue-700' type='submit'>signUP</button><br />
          <small className="text-xl ">don't have an account?
          <button type="button" className='text-color-blue-500 font-bold ml-2  text-blue-700' onClick={()=>{setToggler(!toggler)}}>signIn</button></small>
        </form>
    </div>
  )
}

export default Signin
