import FormBasicInfo from '../components/FormBasicInfo'
import FormAbout from '../components/FormAbout'
import FormConfirm from '../components/FormConfirm'
import AfterSubmit from '../components/AfterSubmit'
import React, { Component } from 'react';
import axios, { post } from 'axios';
export default class ParentForm extends React.Component {
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
      id: String,
      signupSuccess: false, 
    }
    next = () => {
        // update state.step by adding to previous state
        this.setState(prevState => {
          return {step: prevState.step + 1
        }})
    }
    back = () => {
      //update state.step by minus 1 from previous state
     
      
      this.setState(prevState => {
          return {step: prevState.step - 1
      }})
    }
    handleID = idVal => {
      this.setState({id: idVal})
      console.log(this.state)
    }
    handleChange = input => e => {
      console.log(this.state.profilePic)
      if(typeof this.state.profilePic != "undefined"){
        delete this.state.profilePic
      }
        this.setState({
            [input]: e.target.value
        })
        console.log(this.state)
    }
    // handleChangePic = input => e => {
    //   this.setState({
    //     [input]: e.target.files[0]
    //   } )
    // }
    
      render(){
        const { step } = this.state
        const { firstName, lastName, sports, gender, dateOfBirth, description, team, location, signupSuccess,  } = this.state
        const values = { firstName, lastName, sports, gender, dateOfBirth, description, team, location, signupSuccess }
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
                // handleChangePic = {this.handleChangePic}
                next = {this.next}
                back = {this.back}
                
                />
              )
            case 3:
                return (
                    <FormConfirm
                    values = {values} 
                    next = {this.next}
                    back = {this.back}
                    handleID = {this.handleID}

                    />
                  )
            case 4:
              return (<AfterSubmit
                 values = {values}
                 />)
            default:
          }
      }
    }