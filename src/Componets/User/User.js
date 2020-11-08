import React, { useEffect, useState } from 'react';
import './User.css';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const User = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const showButton = (id) =>{
        console.log('clicked')
    }
    return (
        <Grid
            container
            direction="column"
            justify="center"
            
        >
        <div className="emp-container">
            <h1>Employees list</h1>
            {
                users.map(user =>  <div className="user-partialData">
                    <h3>Name: {user.name}</h3>
                    <p>Id: {user.id}</p>
                    <p>Email: {user.email}</p>
                    <Button onClick={()=>showButton(user.id)} variant="contained" color="primary" href={"/user/"+user.id}>
                        Show Details
                    </Button>
                </div> )
                
            }
            
        </div>
        </Grid>
    );
};

export default User;