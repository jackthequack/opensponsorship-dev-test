import React, {Component, useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import { Fab, CardMedia, CardActionArea, TextField, TableRow, Avatar, CardHeader } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import AddIcon from "@material-ui/icons/Add";

function ProfilePage(props) {
    let { slug } = useParams();
    let name = slug.split('_');
    let firstName = name[0];
    let lastName = name[1];
    const[isLoading, setLoading] = useState(true);
    const[users, setUsers] = useState();
    console.log(firstName, lastName)

    useEffect(() => {
        const data = fetch('/users', {headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }})
              .then(res => res.json())
              .then(user => {
                  let userList = user.filter(u => { return (u.firstName == firstName && u.lastName == lastName)})[0]
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
                            <Avatar
                                style={styles.img}
                                src="/Krause_GeorgeL_001.jpg" 
                                />
                                <br />
                                
                            </Row>
                            <Row>
                                <label htmlFor="upload-photo">
                                <input
                                    style={{ display: 'none' }}
                                    id="upload-photo"
                                    name="upload-photo"
                                    type="file"
                                    // onChange={handleChangePic('profilePic')}
                                />
                                <Fab
                                color="secondary"
                                size="small"
                                component="span"
                                aria-label="add"
                                variant="extended"
                                style={{marginTop: '.25rem'}}
                                >
                                    <AddIcon /> Upload
                                </Fab>
                            



                                </label>

                            </Row>

                            
                        </Container>
                    </Col>

                    <Col>
                    <TextField
                        style={styles.textField}
                        defaultValue={users.firstName}
                        variant="outlined"
                        disabled={true}
                    />
                    </Col>
                    <Col>
                        <TextField
                            style={styles.textField}
                            defaultValue={users.lastName}
                            variant="outlined"
                            disabled={true}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                 
                
                <TextField
                    style={styles.textField}
                    defaultValue={users.firstName}
                    variant="outlined"
                    disabled={true}
                />
            </Container>
           
        )
    }
    
}
const styles = {
    textField: {
        margin: "1em"
    },
    img: {
        width: "4.5em",
        height: "4.5em"
    }
}

export default ProfilePage