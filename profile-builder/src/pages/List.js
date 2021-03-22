import React, {Component} from 'react';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'
import { Container, Row, Col } from 'react-bootstrap';
import { Fab, CardMedia, CardActionArea, TextField, TableRow, Avatar, CardHeader, Button} from '@material-ui/core';
import {useParams, NavLink} from "react-router-dom"
import MenuItem from '@material-ui/core/MenuItem';
import ListComponent from '../components/ListComponent'
import axios from 'axios'

export class List extends Component {
    constructor(props){
        super(props)
        this.state = {users: []}
        
    }
    componentDidMount() {
        axios.get('/users')
        .then(user => {
            console.log(user)
            this.setState({users: user.data})
        })
         
        .catch(err => console.log(err))
    }
    render() {
       
        
        const elements = this.state.users.map(user => {
            return(
                <div>
                    <Row>
                    <Col xs={2}>
                        <Avatar
                            id='profilePic'
                            style={styles.img}
                            // src={user.profilePic} 
                        />
                    </Col>
                    <Col>
                        <h5 style={styles.img}>{`${user.firstName} ${user.lastName}`}</h5>

                    </Col>
                    <Col>
                        <NavLink  to={`/${user.firstName}_${user.lastName}`} className="btn btn-primary" style={styles.button}>View Profile</NavLink>
                    </Col>
                </Row>
                <br />
                </div>
                
               
            )
        })
        return (
            <MuiThemeProvider>
                <React.Fragment>
                        <ListComponent
                            users = {this.state.users}
                            elements = {elements} />
                    </React.Fragment>
            </MuiThemeProvider>
        )
    }
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
export default List;