import React from 'react';
import FinalBadge from './FinalBadge'

class InputBadge extends React.Component{
  constructor(){
    super()
    this.state={
      firstName: '',
      lastName: '',
      email: '',
      birthPlace: '',
      phone: '',
      faveFood: '',
      about: '',
      badges: [
        {
          firstName: ''
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.validateNames = this.validateNames.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.validateNum = this.validateNum.bind(this)
    this.displayNewBadge = this.displayNewBadge.bind(this)
  }

  handleChange(e){
    const {name, value} = e.target 
    this.setState({
      [name] : value
    })
  }

  validateNames(){
    // figure out a way to make this more DRY 

    const inputReg = /[a-zA-Z][a-zA-Z0-9-_.]{3}/
    const firstNameTest = inputReg.test(this.state.firstName)
    const lastNameTest = inputReg.test(this.state.lastName)
    const emailTest = inputReg.test(this.state.email)
    const birthPlaceTest = inputReg.test(this.state.birthPlace)
    const faveFoodTest = inputReg.test(this.state.faveFood)
    const aboutTest = inputReg.test(this.state.about)
    if(firstNameTest === false || lastNameTest === false ||
      emailTest === false || birthPlaceTest === false ||
      faveFoodTest === false || aboutTest === false){
      return alert('min three characters')
    } else {}
  }

  validateNum(){
    const validation = /[0-9][*|\":<>[\]{}`\\()';@&$-]/g;
    const phoneTest = validation.test(this.state.phone);
    if(phoneTest === true){
      alert('No special characters in phone number!')
    }else{}
  }

  submitForm(e){
    e.preventDefault()
    this.validateNames()
    this.validateNum()

    this.setState((prevState) =>{
      return {
        firstName: '',
        lastName: '',
        email: '',
        birthPlace: '',
        phone: '',
        faveFood: '',
        about: '',
        badges:  [ 
          {
            firstName: prevState.firstName,
            lastName: prevState.lastName,
            email: prevState.email,
            birthPlace: prevState.birthPlace,
            phone: prevState.phone,
            faveFood: prevState.faveFood,
            about: prevState.about
          }
        ]
      }
    })
   
  }

  displayNewBadge(e){
    e.preventDefault();
    console.log('clicked')
   return <FinalBadge badges={this.state.badges} firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} birthPlace={this.state.birthPlace} phone={this.state.phone} faveFood={this.state.faveFood} about={this.state.about}/>
  }
 

  render(){
    // disabling submit button 
    const{firstName, lastName, email, birthPlace, phone, faveFood, about} = this.state;
    const isEnabled = 
    firstName.length > 0 && 
    lastName.length > 0 &&
    email.length > 0 &&
    birthPlace.length > 0 &&
    phone.length > 0 &&
    faveFood.length > 0 &&
    about.length > 0 ;

    return(
      <>
      <div className="badge-border">
        <form onSubmit={this.submitForm}>
          <input
          onChange={this.disableButton}
           name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          className="new-input" 
          onChange={this.handleChange}/>
          <input
           name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          className="new-input"
          onChange={this.handleChange}/>
          <input
           name="email"
          value={this.state.email}
          placeholder="Email"
          className="new-input"
          onChange={this.handleChange}/>
           <input
           name="birthPlace"
          value={this.state.birthPlace}
          placeholder="Place of Birth"
          className="new-input"
          onChange={this.handleChange}/>
          <input
           name="phone"
          value={this.state.phone}
          placeholder="Phone"
          className="new-input"
          onChange={this.handleChange}/>
          <input
           name="faveFood"
          value={this.state.faveFood}
          placeholder="Favorite Food"
          className="new-input"
          onChange={this.handleChange}/>
          <div className="textarea-container">
          <textarea 
          placeholder="Tell us about yourself!"
          value={this.state.about}
          onChange={this.handleChange}
          name="about"></textarea>
          </div>
          <div className="button-container">
          <button 
          disabled={!isEnabled} 
          className="button"
          onClick={this.displayNewBadge}>Submit</button>
          </div>
        </form>
        {/* <FinalBadge badges={this.state.badges} firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} birthPlace={this.state.birthPlace} phone={this.state.phone} faveFood={this.state.faveFood} about={this.state.about}/> */}

        </div>
      </>
    )
  }
}

export default InputBadge
