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
      badges: [],
      showForm: false
    }
  }

  handleChange =(e)=>{
    const {name, value} = e.target 
    this.setState({
      [name] : value
    })
  }

  submitForm=(e)=>{
    e.preventDefault()
    // character validation
    const inputs = [
      this.state.firstName,
      this.state.lastName,
      this.state.phone,
      this.state.email,
      this.state.faveFood,
      this.state.birthPlace,
      this.state.about
    ]
       inputs.map(item =>{
          if(item.length <= 3){
            alert('Fields need at least 3 characters')
          }})
    
    // phone validation
    if(isNaN(this.state.phone)){
      alert('Phone needs to be numbers and no special characters!')
    } else{
    this.setState((prevState) =>{
      return {
        firstName: '',
        lastName: '',
        email: '',
        birthPlace: '',
        phone: '',
        faveFood: '',
        about: '',
        badges:  [ ...prevState.badges,
          {
            firstName: prevState.firstName,
            lastName: prevState.lastName,
            email: prevState.email,
            birthPlace: prevState.birthPlace,
            phone: prevState.phone,
            faveFood: prevState.faveFood,
            about: prevState.about
          }
        ],
      
      }
    })
  }
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

    const myMappedBadge = this.state.badges.map(item =>{
      return <FinalBadge 
      key={item.firstName}
      firstName={item.firstName}
      lastName={item.lastName} 
      email={item.email} 
      birthPlace={item.birthPlace}
      phone={item.phone} 
      faveFood={item.faveFood} 
      about={item.about}/>
    })

    return(
      <>
      <div className="badge-border">
        <form onSubmit={this.submitForm}
        name="form">
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
          <button className="button"
          disabled={!isEnabled}>Submit</button>
          </div>
        </form>
        {myMappedBadge}
        </div>
      </>
    )
  }
}

export default InputBadge
