import React, {Component} from 'react';
import {useParams} from "react-router-dom"

function ProfilePage(props) {
    let { slug } = useParams();
    let name = slug.split('_');
    let firstName = name[0];
    let lastName = name[1];
    

    const users = props.users;
    console.log(users)
    let user = users.filter(user => { return (user.firstName == firstName && user.lastName == lastName)})[0]
    console.log(user)
    return <h1>Hello</h1>
}

export default ProfilePage