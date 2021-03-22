import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import Redirect from 'react-router-dom/Redirect'
import Link from '@material-ui/core/Link'
import { NavLink, useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem';

import axios from 'axios'
const AfterSubmit = (props) =>  {
    
    
        const { values } = props;
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
                
                    <h1>You have successfully created a new profile!</h1>

                    <br />
                    <NavLink to={`/list/${props.values.firstName}_${props.values.lastName}`} className="btn btn-primary" style={styles.button}>View My Profile</NavLink>
               
                    
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
export default AfterSubmit;