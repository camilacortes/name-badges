import React from 'react';

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
      about: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.validateNames = this.validateNames.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange(e){
    const {name, value} = e.target 
    this.setState({
      [name] : value
    })
    // console.log(value);
  }

  validateNames(){
    // figure out a way to make this more DRY 

    const inputReg = /[a-zA-Z][a-zA-Z0-9-_.]{3}/
    const firstNameTest = inputReg.test(this.state.firstName)
    const lastNameTest = inputReg.test(this.state.lastName)
    // const emailTest = inputReg.test(this.state.email)
    // const birthPlaceTest = inputReg.test(this.state.birthPlace)
    // const faveFoodTest = inputReg.test(this.state.faveFood)
    // const aboutTest = inputReg.test(this.state.about)

    if(firstNameTest === false || lastNameTest === false){
      return alert('min three characters')
    } else {

    }
  }

  submitForm(e){
    e.preventDefault()
    this.validateNames()
  }

  render(){
    return(
      <div className="badge-border">
        <form onSubmit={this.submitForm}>
          <input
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
          <button>Submit</button>
          </div>
        </form>
        </div>
   
    )
  }
}

export default InputBadge

// 1 make html and css for the boxes 
// 2 fix input values etc. 