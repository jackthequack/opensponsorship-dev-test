import FormBasicInfo from '../components/FormBasicInfo'
import FormAbout from '../components/FormAbout'
import AfterSubmit from '../components/AfterSubmit'
import React, { Component } from 'react';
export default class signUp extends React.Component {
    state = {
      step: 1,
      basicInfo: {name: String, Sport: String, gender: String, dateOfBirth: Date},
      about: {description: String, team: String, location: String, },
      name: "",
      phone:"",
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
        const { basicInfo, about, signupSuccess } = this.state
        const values = { basicInfo, about, signupSuccess }
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
                back = {this.back}
                handleSubmit = {this.handleSubmit}
                />
              )
            
            case 3:
              return <AfterSubmit signupSuccess = {values.signupSuccess}/>
          }
        }
}