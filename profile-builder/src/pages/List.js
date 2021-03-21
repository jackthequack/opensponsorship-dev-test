import React, {Component} from 'react';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"; 
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

export default class ParentForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {users: []}
        
    }
    componentDidMount() {
        axios.get('/users')
        .then(user => {
            console.log(user)
            this.setState({users: user})
        })
            
        .catch(err => console.log(err))
    }
    render() {
        return <h1>hello</h1>
    }
}