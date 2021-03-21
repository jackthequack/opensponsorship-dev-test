import React, {Component, useState, useEffect, forceUpdate, useReducer} from 'react';
import {useParams, NavLink} from "react-router-dom"
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import { Fab, CardMedia, CardActionArea, TextField, TableRow, Avatar, CardHeader, Button} from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import AddIcon from "@material-ui/icons/Add";
import axios from 'axios'
import FormData from 'form-data'

const ProfilePage = ({onSubmit}) => {
    const sports = [
        "Golf",
        "Tennis",
        "Cricket",
        "Basketball",
        "Baseball",
        "American Football",
        "Aquatics",
        "Archery",
        "Automobile Racing",
        "Badminton",
        "Beach Volleyball",
        "Bobsleigh",
        "Body Building",
        "Boxing",
        "Cross Country Running",
        "Cross Country Skiing",
        "Curling",
        "Cycling",
        "Darts",
        "Decathlon",
        "Down Hill Skiing",
        "Equestrianism",
        "eSports",
        "Field Hockey",
        "Figure Skating",
        "Gymnastics",
        "Ice Hockey",
        "Martial Arts",
        "Mixed Martial Arts",
       "Modern Pentathlon",
        "Motorcycle Racing",
        "Netball",
        "Polo",
        "Racquetball",
        "Rowing",
        "Rugby",
        "Sailing",
        "Softball",
        "Shooting",
        "Skateboarding",
        "Skeet Shooting",
        "Skeleton",
        "Snow Boarding",
        "Soccer (Football)",
        "Squash",
        "Surfing",
        "Swimming",
        "Track and Field",
    ]
    onSubmit.bind(this)
    let { slug } = useParams();
    let name = slug.split('_');
    let firstName = name[0];
    let lastName = name[1];
    const[isLoading, setLoading] = useState(true);
    const[users, setUsers] = useState();
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
    
    useEffect(() => {
        const data = fetch('/users', {headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }})
              .then(res => res.json())
              .then(user => {
                  console.log(user)
                  let userList = user.filter(u => { return (u.firstName == firstName && u.lastName == lastName)})[0]
                  console.log(userList)
                  setUsers(userList);
                  setLoading(false)
                  return user;
              })
        return data
    }, [])
    if(isLoading == true){
        return(<div>Loading...</div>)
    }
    else{
        return(
            <Container>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                <Avatar
                                id='profilePic'
                                style={styles.img}
                                src={users.profilePic} 
                                />
                                <br />
                                </Col>
                            
                                
                            </Row>
                            <Row>
                                <Col>
                                <label htmlFor="upload-photo">
                                <input
                                    style={{ display: 'none' }}
                                    id="upload-photo"
                                    name="upload-photo"
                                    type="file"
                                    onChange= {(e) => {
                                        users['profilePic'] = e.target.files[0];
                                    }
                                    }
                                />
                                <Fab
                                color="secondary"
                                size="small"
                                component="span"
                                aria-label="add"
                                variant="extended"
                                // style={{marginTop: '.25em'}}
                                >
                                    <AddIcon /> Upload Photo
                                </Fab>
                            



                                </label>
                                </Col>
                                

                            </Row>

                            
                        </Container>
                    </Col>

                    <Col>
                    <Container>
                        <Row>
                            <Col>
                                <TextField
                                    style={styles.textField}
                                    defaultValue={users.firstName}
                                    variant="outlined"
                                    onChange= {(e) => users['firstName'] = e.target.value}
                                />
                            </Col>
                            <Col>
                                <TextField
                                    style={styles.textField}
                                    defaultValue={users.lastName}
                                    variant="outlined"
                                    onChange= {(e) => users['lastName'] = e.target.value}
                                />
                            </Col>
                        </Row>
                        <Row>
                        <Col>
                            <TextField
                                style={styles.textField}
                                defaultValue={users.sports}
                                select
                                variant="outlined"
                                onChange= {(e) => users['sports'] = e.target.value}
                            >
                                {sports.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
          ))}
                            </TextField>
                        </Col>
                        <Col>
                            <TextField
                                style={styles.textField}
                                defaultValue={users.gender}
                                variant="outlined"
                                onChange= {(e) => users['gender'] = e.target.value}
                            />
                        
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <TextField
                                style={styles.textField}
                                defaultValue={users.dateOfBirth}
                                variant="outlined"
                                onChange= {(e) => users['dateOfBirth'] = e.target.value}
                            />
                        </Col>
                        <Col>
                            <TextField
                                style={styles.textField}
                                defaultValue={users.description}
                                variant="outlined"
                                onChange= {(e) => users['description'] = e.target.value}
                            />
                        
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <TextField
                                style={styles.textField}
                                defaultValue={users.team}
                                variant="outlined"
                                onChange= {(e) => users['team'] = e.target.value}
                            />
                        </Col>
                        <Col>
                            <TextField
                                style={styles.textField}
                                defaultValue={users.location}
                                variant="outlined"
                                onChange= {(e) => users['location'] = e.target.value}
                            />
                        
                        </Col>
                        </Row>
                    </Container>
                    
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        
                    </Col>
                    
                    <Col>
                    </Col>
                </Row>
                 
                <Row>
                    <Col>
                    <Button variant="contained" style = {styles.button} onClick={() => {
                        console.log(users)
                        const formData = new FormData();
                        for(let attribute in users){
                            formData.set(attribute, users[attribute])
                        }
                        if(users.profilePic instanceof File){
                            console.log("Working")
                            formData.delete("profilePic")
                            formData.set("file", users.profilePic, users.profilePic.name)
                        }
     
                        axios
                        .put('/update', formData, {
                            headers: {'Content-Type': 'multipart/form-data'}
                        })
                        .then(res => {
                            setUsers(res.data)
                        })
                        .then(forceUpdate())
                        .catch(err => console.log(err))
                    }}> Save changes </Button>
                    </Col>
                    <Col>
                    <NavLink  to={`/list`} className="btn btn-primary" style={styles.button}>View My Profile</NavLink>
                    </Col>
                </Row>

            </Container>
           
        )
    }
    
}
const styles = {
    textField: {
        margin: "1em",
        width: "100%"
    },
    img: {
        width: "10rem",
        height: "10rem",
        marginLeft: "auto",
        marginRight: "auto"
    },
    button: {
        margin: "1em",
        backgroundColor: "#3f51b5",
        color: "white"

    },
}

export default ProfilePage