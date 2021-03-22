import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import {useParams, NavLink} from "react-router-dom"

const FormBasicInfo = (props) => {
    const continueForm = e => {
        e.preventDefault();
        props.next();
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

        const { values, handleChange } = props;
        return (
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
                
                    <TextField
                        style={styles.textField}
                        hintText="Enter your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        variant="outlined"
                        label="First Name"
                    />
                
                    <br />
                    <TextField
                        style={styles.textField}
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        variant="outlined"
                        label="Last Name"
                    />
                    <br />
                    <TextField
                                style={styles.textField}
                                defaultValue={ values.sports }
                                select
                                variant="outlined"
                                onChange= {handleChange('sports')}
                            >
                                {sports.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
          ))}
                            </TextField>
                
                    <br />
                    <TextField
                        style={styles.textField}
                        label="Date of Birth"
                        onChange={handleChange('dateOfBirth')}
                        defaultValue={values.dateOfBirth}
                        variant="outlined"
                    />
                
                    <br />
                    <TextField
                        style={styles.textField}
                        label="Gender"
                        onChange={handleChange('gender')}
                        defaultValue={values.gender}
                        variant="outlined"
                    />

                    <br />
                    <Button variant="contained" style = {styles.button} onClick={continueForm}> Continue </Button>
               
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }


const styles = {
    button: {
        margin: "1em",
        backgroundColor: "#3f51b5",
        color: "white"

    },
    textField: {
        margin: "1em",
        width: "25%"
    },
    typography: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    icon: {
        position: "absolute"
    }
}
export default FormBasicInfo;