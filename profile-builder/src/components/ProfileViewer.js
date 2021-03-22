import React, {Component, useEffect, useState, setState} from 'react';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import { Container, Row, Col } from 'react-bootstrap';
import { Fab, CardMedia, CardActionArea, TextField, TableRow, Avatar, CardHeader, Button} from '@material-ui/core';
import {useParams, NavLink} from "react-router-dom"
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'
import { withStyles } from "@material-ui/core/styles";
const DarkerDisabledTextField = withStyles({
    root: {
      marginRight: 8,
      "& .MuiInputBase-root.Mui-disabled": {
        color: "black" // (default alpha is 0.38)
      }
    }
  })(TextField);
const ProfileViewer = () => {
  
    let { slug } = useParams();
    let name = slug.split('_');
    let firstName = name[0];
    let lastName = name[1];
    console.log(firstName, lastName)
    const[isLoading, setLoading] = useState(true);
    const[users, setUsers] = useState();
    
    const [openMenu, setOpenMenu] = useState(false);
    const [anchorEl, open] = useState(null);  
    const handleClick = event => {  
            
        if(openMenu){
            setOpenMenu(false)
        }
        else{
            setOpenMenu(true)
        }
          
    };  

    const handleClose = () => {  
            setOpenMenu(false);  
    }; 

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
            <div>
                <AppBar position="static" >
                    
                    <Toolbar>
                        
                    
                        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" style={styles.icon} onClick={handleClick}>
                                <MenuIcon />
                                <Menu id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={openMenu}
                                    onClose={handleClose}>
                                    <MenuItem onClick={handleClose}><NavLink to= '/'>Form</NavLink></MenuItem>  
                                    <MenuItem onClick={handleClose}><NavLink to= '/list'>List</NavLink></MenuItem>  
                                </Menu>
                        </IconButton>   
                        <Typography variant="h6" style={styles.typography}>
                            OpenSponsorship
                        </Typography>             
                    </Toolbar>
                            
                </AppBar>
                <Container>
               <Row>
                   <Col>
                   <Container>
                       <Row>
                           <Col>
                           <Avatar 
                            style={styles.img}
                            // src={users.profilePic}
                             />
                            </Col>
                           
                           
                           
                        
                       </Row>
                       <Row>
                           <Col>
                           <h3 style ={{textDecoration: "underline", marginTop: ".5rem"}}>{`${users.firstName} ${users.lastName}`}</h3>
                           {/* <DarkerDisabledTextField
                                    style={{textColor: "black"}}
                                    defaultValue={`${users.firstName} ${users.lastName}`}
                                 
                                    disabled={true}
                                    variant = "filled"
                                    onChange= {(e) => users['firstName'] = e.target.value}
                                >
                    </DarkerDisabledTextField> */}
                           </Col>
                        
                       </Row>
                   
                   </Container>
                   </Col>
                   <Col>
                   <DarkerDisabledTextField
                                    style={{textColor: "black", marginTop: "3rem", marginLeft: "3rem"}}
                                    defaultValue={users.sports}
                                    variant="filled"
                                    label="Sport"
                                    disabled={true}
                                    
                                ></DarkerDisabledTextField>
                    
                        <DarkerDisabledTextField
                                    style={{textColor: "black", marginTop: "3rem", marginLeft: "3rem"}}
                                    defaultValue={users.team}
                                    label="Team"
                                    variant="filled"
                                    disabled={true}
                                    
                                ></DarkerDisabledTextField>
                       
                        <Row>
                            <Col>
                            <DarkerDisabledTextField
                                    style={{textColor: "black", marginTop: "3rem", marginLeft: "3rem"}}
                                    defaultValue={users.location}
                                    label="Location"
                                    variant="filled"
                                    disabled={true}
                                    
                                >
                         </DarkerDisabledTextField>
                         <DarkerDisabledTextField
                                    style={{textColor: "black", marginTop: "3rem", marginLeft: "3rem"}}
                                    defaultValue={users.dateOfBirth}
                                    label="Date of Birth"
                                    variant="filled"
                                    disabled={true}
                                    
                                >
                         </DarkerDisabledTextField>
                            </Col>
                        
                        </Row>
                        <Row>
                            <Col>
                            <DarkerDisabledTextField
                                    style={{textColor: "black", marginTop: "3rem", marginLeft: "auto", marginRight: "auto", width: "90%"}}
                                    defaultValue={users.description}
                                    label="Description"
                                    variant="filled"
                                    disabled={true}
                                    
                                >
                         </DarkerDisabledTextField>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                            <NavLink  to={`/list/${users.firstName}_${users.lastName}`} className="btn btn-primary" style={styles.button}>Edit Profile</NavLink>

                            </Col>

                        </Row>
                       
                   </Col>
                   
                   </Row>

                    <Row>
                <Col>
                </Col>
                   <Col>
                   
                    </Col>
                 
               </Row>

           </Container>
           </div>
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
        marginRight: "auto",
        marginTop: "1rem",
        border: "solid 3px black"
    },
    button: {
        margin: "3em",
        backgroundColor: "#3f51b5",
        color: "white"

    },
    typography: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    icon: {
        position: "absolute"
    }
}

export default ProfileViewer