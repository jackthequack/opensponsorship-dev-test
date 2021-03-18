import FormBasicInfo from '../components/FormBasicInfo'
import FormAbout from '../components/FormAbout'
import FormConfirm from '../components/FormConfirm'
import AfterSubmit from '../components/AfterSubmit'
import React, { Component } from 'react';
export default class signUp extends React.Component {
    state = {
      step: 1,
      firstName: String, 
      lastName: String, 
      sports: String, 
      gender: String, 
      dateOfBirth: Date,
      description: String, 
      team: String, 
      location: String,
      profilePic: Image,
      signupSuccess: false  
    }
    next = () => {
        // update state.step by adding to previous state
        this.setState(prevState => {
          return {step: prevState.step + 1
        }})
    }
    back = () => {
    // update state.step by minus 1 from previous state
    this.setState(prevState => {
        return {step: prevState.step - 1
    }})
    }
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
        console.log(this.state)
    }
    handleSubmit = () =>{
        //connect to the database, depending on the returned state, 
        //will change the state.signupSuccess to be true
        //and then render success component
        this.setState({
          signupSuccess: true
        }, () => this.next())
      }
      render(){
        const { step } = this.state
        const { firstName, lastName, sports, gender, dateOfBirth, description, team, location, profilePic, signupSuccess,  } = this.state
        const values = { firstName, lastName, sports, gender, dateOfBirth, description, team, location, profilePic, signupSuccess }
        switch (step) {
            case 1:
              return (
                <FormBasicInfo 
                values = {values} 
                handleChange = {this.handleChange}
                next = {this.next}
                />
              )
            case 2:
              return (
                <FormAbout 
                values = {values} 
                handleChange = {this.handleChange}
                next = {this.next}
                back = {this.back}
                handleSubmit = {this.handleSubmit}
                />
              )
            case 3:
                return (
                    <FormConfirm
                    values = {values} 
                    next = {this.next}
                    back = {this.back}
                    handleSubmit = {this.handleSubmit}
                    />
                  )
            case 4:
              return (<AfterSubmit
                 values = {values}
                 />)
          }
        }
}