import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'
import Redirect from 'react-router-dom/Redirect'
import Link from '@material-ui/core/Link'
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios'
export class AfterSubmit extends Component {
    // continue = e => {
    //     e.preventDefault();
    //     let path=`/list/${this.props.values.firstName}_${this.props.values.lastName}`
    //     let history = useHistory();
    //     history.push(path)
    // }
    
    render() {
        const { values } = this.props;
   
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static" >
                        
                        <Toolbar>
                            <Typography variant="h6" style={styles.typography}>
                                OpenSponsorship
                            </Typography>
                            <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" style={styles.icon}>
                                <Menu/>
                            </IconButton>
                            
                        </Toolbar>
                    </AppBar>
            
                    <br />
                
                    <h1>You have successfully created a new profile!</h1>

                    <br />
                    <NavLink to={`/list/${this.props.values.firstName}_${this.props.values.lastName}`} className="btn btn-primary" style={styles.button}>View My Profile</NavLink>
               
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
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