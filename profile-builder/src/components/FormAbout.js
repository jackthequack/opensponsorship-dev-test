import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import Fab from '@material-ui/core/Fab'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import {useParams, NavLink} from "react-router-dom"


import AddIcon from "@material-ui/icons/Add";
const FormAbout = (props) => {
    const continueForm = e => {
        e.preventDefault();
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
                        onChange={handleChange('description')}
                        defaultValue={values.description}
                        variant="outlined"
                        label="Description"
                    />
                
                    <br />
                    <TextField
                        style={styles.textField}
                        onChange={handleChange('team')}
                        defaultValue={values.location}
                        variant="outlined"
                        label="Team"
                    />
                    <br />
                    <TextField
                        style={styles.textField}
                        onChange={handleChange('location')}
                        defaultValue={values.location}
                        variant="outlined"
                        label="Location"
                    />
                    <br />

                    {/* <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                    />
                    <Button variant="contained" style={styles.imgBtn} color="secondary" component="span">
                        Upload Photo
                    </Button> */}
                    <label htmlFor="upload-photo">
                        {/* <input
                            style={{ display: 'none' }}
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                            onChange={handleChangePic('profilePic')}
                        /> */}

                        <Fab
                            color="secondary"
                            size="small"
                            component="span"
                            aria-label="add"
                            variant="extended"
                            style={{margin: '1em'}}
                        >
                            <AddIcon /> Upload photo
                        </Fab>
                        <br />



                    </label>
                    <br/>
                    
                    <Button variant="contained" style = {styles.backButton} onClick={back}> Back </Button>
                    <Button variant="contained" style = {styles.button} onClick={continueForm}> Continue </Button>
               
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }


const styles = {
    imgBtn: {
        margin: "1em"
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
export default FormAbout;