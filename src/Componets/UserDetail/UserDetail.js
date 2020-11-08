import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './UserDetail.css'

const UserDetail = () => {
    const [user, setUser] = useState([])
    const { id } = useParams()

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users/'+id)
        .then(res =>res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            <h1>{user.name}</h1>
        <div className="user-fullData">
            <h3 style={{textAlign:'center',color:'blue'}}>Details Information</h3>
            <h4>Name: {user.name}</h4>
            <p>Username: {user.username}</p>
            <p>Id :{user.id}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
        <Comment></Comment>
        <Button variant="contained" color="primary" disableElevation href={"/"}>
             Back to main Menu
        </Button>
        </div>
    );
};

export default UserDetail;