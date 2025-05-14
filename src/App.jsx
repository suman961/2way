import React, { useState } from 'react'
import Signin from './Componant/Signin'
import Signup from './Componant/Signup'
import Userlist from './Componant/Users'

const App = () => {
  const [toggler, setToggler] = useState(true)
  const [users, setUsers] = useState([]);
  return (
  <main className='w-screen h-screen flex overflow-auto bg-gray-500 text-white p-8'>
      <div className='w-[70%] mx-auto'>
      {toggler ? (
        <Signup toggler={toggler} setToggler={setToggler} users={users} setUsers={setUsers}/>
      ):(
        <Signin toggler={toggler} setToggler={setToggler} users={users} setUsers={setUsers}/>
      )}
    </div>
    <div className='w-[30%] h-screen rounded bg-gray-400 p-10 mx-auto'>
      <Userlist users={users} setUsers={setUsers}/>
    </div>
  </main>
  )
}

export default App
