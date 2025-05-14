import { useEffect } from "react";


const UserList = ({users, setUsers}) => {
    const deleteHandler = (id) => {
        const filteredUsers = users.filter((users) => users.id !== id);
        setUsers(filteredUsers);
    };
    

    const userListItems = users.map((users) => (
<ul key={users.id}
            className="flex items-center  justify-between bg-blue-700 rounded p-2 font-thin mb-3">        
            <li>
            <p>
                <span className="block text-2xl font-bold mb-1">{users.name}</span>  </p>
                <small className="block text-xl mb-1 ">{users.Email}</small>
          </li>
            <button
                onClick={() => deleteHandler(users.id)}
                className="hover:cursor-pointer font-normal text-2xl text-red-500">
                Delete
            </button>
        </ul>
    ));

    return <>
    {users.length===0?(
      <p className="text-3xl font-semibold text-red-600"> no users found. </p>
    ):(
      <ul>{userListItems}</ul>
    )}</>;
}
export default UserList;





// import React from 'react'

// const Users = () => {

//   return (
//   <ul className='bg-gray-600 p-4 rounded flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 w-full'>
//     <li>
//         <p>username</p>
//         <small className='md:font-seminold'>email@email.com</small>
//     </li>
//     <button className='md:text-red-600'>delete</button>
//   </ul>
//   )
// }

// export default UsersList