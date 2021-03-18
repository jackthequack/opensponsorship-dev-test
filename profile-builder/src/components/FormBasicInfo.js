import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'

export class FormBasicInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.next();
    }
    
    render() {
        const { values, handleChange } = this.props;
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
                        hintText="Choose your Sports"
                        floatingLabelText="Sports"
                        onChange={handleChange('sports')}
                        defaultValue={values.sports}
                        variant="outlined"
                        label="Sport"
                    />
                
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
                    <Button variant="contained" style = {styles.button} onClick={this.continue}> Continue </Button>
               
                    
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
export default FormBasicInfo;