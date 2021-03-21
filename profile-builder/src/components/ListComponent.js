import React, {Component} from 'react';
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

const ListComponent = (props) => {
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
    return(
        <div>
        <AppBar position="static" >
                    
            <Toolbar>
                <Typography variant="h6" style={styles.typography}>
                    OpenSponsorship
                </Typography>
           
            
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
                
                

                   

                    
           
                
                

                
                {/* <Menu open={openMenu}>
                    <MenuItem onClick={handleClose}>Form</MenuItem>  
                    <MenuItem onClick={handleClose}>List</MenuItem>  
                </Menu> */}

                
                    {/* <MenuItem onClick={handleClose}>Save</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem> */}
                
            </Toolbar>
                    
        </AppBar>
        <br />
        <Container id="containerList">
            {props.elements}
        </Container>                                                                                                                                                                                                                      
    </div>
        
    )

}
const styles = {
    button: {
        
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
    },
    img: {
        marginLeft: "auto",
        marginRight: "auto"
    },
  
}
export default ListComponent;