import {React, Component} from 'react';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'

export class Profile extends Component {
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
export default Profile;