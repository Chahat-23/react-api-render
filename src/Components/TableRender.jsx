import React, { useEffect, useState } from 'react'
import UserData from './UserData';
const API="https://jsonplaceholder.typicode.com/users";

export default function TableRender() {


    const [users,setUsers]=useState([]);

    const fetchUser=async(URL)=>{
        try{
            const res=await fetch(URL);
            const data = await res.json();
            if(data.length>0)
            setUsers(data);
        }
        catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchUser(API);
    },[])

  return (
    <>
    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
            </tr>
        </thead>
        <tbody>
            <UserData users={users}/>
        </tbody>
        </table> 
    </>
  )
}
