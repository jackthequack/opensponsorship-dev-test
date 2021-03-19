import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'
import { List, ListItem, ListItemText } from '@material-ui/core';
import axios from 'axios';

export class FormConfirm extends Component {
    
    continue = e => {
        e.preventDefault();
        let {firstName, lastName, sports, dateOfBirth, gender, description, team, location, profilePic} = this.props.values;
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
        let pp = {profilePic: profilePic}
        axios
        //Store images locally temporarily until download4ed to mongo
            .post('/create', profile)
            .then(res => {
                console.log(res)
                pp["id"] = res.data;
                console.log(pp)
                console.log(pp["id"])
                return axios.post('/create', pp);
                
            })
            .catch(err => console.log(err))
        
        this.props.next();
    }
    back = e => {
        e.preventDefault();
        this.props.back();
    } 
    
    render(){
        const { values: { firstName, lastName, sports, gender, dateOfBirth, description, team, location} } = this.props;
        return(
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
                <Button variant="contained" style = {styles.backButton} onClick={this.back}> Back </Button>
                <Button variant="contained" style = {styles.button} onClick={this.continue}> Confirm </Button>
            </React.Fragment>
            </MuiThemeProvider>
            
                
        )
    }
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