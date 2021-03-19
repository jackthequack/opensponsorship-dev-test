import React, {Component} from 'react';
import {useParams} from "react-router-dom"
import CardMedia from '@material-ui/core/CardMedia'
import { Card } from '@material-ui/core';
function ProfilePage(props) {
    let { slug } = useParams();
    let name = slug.split('_');
    let firstName = name[0];
    let lastName = name[1];
    

    const users = props.users;
    let user = users.filter(user => { return (user.firstName == firstName && user.lastName == lastName)})[0]
    console.log(user)
    return(
        <CardMedia 
        />
    )
}

export default ProfilePage