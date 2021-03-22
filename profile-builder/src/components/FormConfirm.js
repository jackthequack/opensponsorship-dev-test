import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import { List, ListItem, ListItemText } from '@material-ui/core';
import axios from 'axios';
import multer from 'multer';
import crypto from 'crypto'
import FormData from 'form-data'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import {useParams, NavLink} from "react-router-dom"

const FormConfirm =  (props) => {
    
    const continueForm = e => {
        e.preventDefault();
        const formData = new FormData();
        let {firstName, lastName, sports, dateOfBirth, gender, description, team, location} = props.values;
        let profile = {
          firstName,
          lastName,
          sports,
          dateOfBirth,
          gender,
          description,
          team,
          location,
        }
        for(let attribute in profile){
            formData.set(attribute, profile[attribute])
        }
        // formData.set("file", profilePic, profilePic.name)
        for(let value of formData.entries()){
            console.log(value[0], value[1])
        }
        // let pp = {profilePic: profilePic}
        axios
        //Store images locally temporarily until download4ed to mongo
            .post('/create', formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            })
            .catch(err => console.log(err))
        
        props.next();
    }
    const back = e => {
        e.preventDefault();
        props.back();
    } 
    const [openMenu, setOpenMenu] = React.useState(false);
    const [anchorEl, open] = React.useState(null);  
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
    
 
        const { values: { firstName, lastName, sports, gender, dateOfBirth, description, team, location} } = props;
        return(
            <MuiThemeProvider>
            <React.Fragment>
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
                <br />
                <div style={styles.confirmList}>
                <List style={styles.confirmList}>
                    <ListItem style={styles.confirmListitem}>
                        <ListItemText 
                        primary="Name"
                        secondary= {`${firstName} ${lastName}`}
                        />
                        
                    </ListItem>
                    <ListItem style={styles.confirmListitem}>
                        <ListItemText 
                        primary="Sports"
                        secondary= {`${sports}`}
                        />
                        
                    </ListItem>
                    <ListItem style={styles.confirmListitem}>
                        <ListItemText 
                        primary="Gender"
                        secondary={`${gender}`}
                        />
                        
                    </ListItem>
                    <ListItem style={styles.confirmListitem}>
                        <ListItemText 
                        primary="DOB"
                        secondary={`${dateOfBirth}`}
                        />
                        
                    </ListItem>
                    <ListItem style={styles.confirmListitem}>
                        <ListItemText 
                        primary="Description"
                        secondary={`${description}`}
                        />
                        
                    </ListItem>
                    <ListItem style={styles.confirmListitem}>
                        <ListItemText 
                        primary="Team"
                        secondary={`${team}`}
                        />
                        
                    </ListItem>
                    <ListItem style={styles.confirmListitem}>
                        <ListItemText 
                        primary="Location"
                        secondary={`${location}`}
                        />
                        
                    </ListItem>
                </List>
                </div>
                <br />
                <Button variant="contained" style = {styles.backButton} onClick={back}> Back </Button>
                <Button variant="contained" style = {styles.button} onClick={continueForm}> Confirm </Button>
            </React.Fragment>
            </MuiThemeProvider>
            
                
        )
    }

const styles = {
    confirmList: {
        display: 'inline-block',
        // alignItems: 'center'
        // marginLeft: "5em",
        // marginRight: "auto"
    },
    confirmListitem: {
        display: "block"
    },
    button: {
        margin: "1em",
        backgroundColor: "#3f51b5",
        color: "white"

    },
    backButton: {
        margin: "1em" 
    },
    textField: {
        margin: "1em"
    },
    typography: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    icon: {
        position: "absolute"
    }
}
export default FormConfirm;