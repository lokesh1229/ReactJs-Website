import React from 'react';
import "./Users.css";
import axios from 'axios';
import { useState } from 'react';

function Users() {

    let [users,setUsers] = useState([]);

    const getUsers = () =>{
        // alert("Working");
        axios
        .get("https://randomuser.me/api/?results=50")
        .then((usersdata) => {
            console.log(usersdata.data.results);
            setUsers(usersdata.data.results);
            
        }).catch((errordata) => {
            console.log(errordata);
        });
    };

  return (
    <div className='usersContainer'>
      <h1>Users Information</h1>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto porro laudantium quia velit, iure minima facilis illum magni modi iusto vero illo a eius recusandae, corrupti, sequi laboriosam repudiandae ratione cupiditate ab. Maxime tenetur modi, et aliquam ut beatae qui pariatur ab, numquam temporibus ea veritatis delectus minima quis!
      </p>
      <button onClick={getUsers} className='btn btn-outline-success'>Get Users Information</button>
      
      <div className='mt-5 m-auto'>
       {
        users.length>0?
      <table className='table table-hover'>
        <thead className='table-dark'>
            <tr>
                <th>ID</th>
                <th>PHOTO</th>
                <th>NAME</th>
                <th>GENDER</th>
                <th>EMAIL</th>
            </tr>
        </thead>
        <tbody>
            {users.map(function(user,index){
            return (<tr>
                <td>{index+1} </td>
                <td>
                    <img src={user.picture.medium} width={70} height={70} alt=''></img>
                </td>
                <td>{user.name.first}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
            </tr>)
        })}
        </tbody>
      </table>:<div><h2 style={{color:"green"}}>No Data Found</h2></div>
}</div>
    </div>
  )
}

export default Users;
