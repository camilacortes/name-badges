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
  }

  render(){
    return(
      <div className="badge-border">
        <form>
          <input
           name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          className="new-input"/>
          <input
           name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          className="new-input"/>
          <input
           name="email"
          value={this.state.email}
          placeholder="Email"
          className="new-input"/>
           <input
           name="birthPlace"
          value={this.state.birthPlace}
          placeholder="Place of Birth"
          className="new-input"/>
          <input
           name="phone"
          value={this.state.phone}
          placeholder="Phone"
          className="new-input"/>
          <input
           name="faveFood"
          value={this.state.faveFood}
          placeholder="Favorite Food"
          className="new-input"/>
          <textarea 
          placeholder="Tell us about yourself!"
          value={this.state.about}></textarea>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default InputBadge

// 1 make html and css for the boxes 
// 2 fix input values etc. 