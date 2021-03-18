import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'
import Fab from '@material-ui/core/Fab'
import AddIcon from "@material-ui/icons/Add";
export class FormAbout extends Component {
    continue = e => {
        e.preventDefault();
        this.props.next();
    }
    back = e => {
        e.preventDefault();
        this.props.back();
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
                        <input
                            style={{ display: 'none' }}
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                        />

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
                    
                    <Button variant="contained" style = {styles.backButton} onClick={this.back}> Back </Button>
                    <Button variant="contained" style = {styles.button} onClick={this.continue}> Continue </Button>
               
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
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
export default FormAbout;