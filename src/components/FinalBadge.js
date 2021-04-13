import React from 'react'

export default function FinalBadge(props) {
  return (
    <div className="final-badge-container">
      <div className="final-badge-border">
        <div className="badge-header">Badge: </div>
      <p> Name: {props.firstName} {props.lastName}</p>
      <p> Email: {props.email}</p>
      <p>Place of Birth: {props.birthPlace}</p>
      <p>Phone: {props.phone}</p>
      <p>Favorite Food: {props.faveFood}</p>
      <p>About Me: {props.about}</p>

      </div>
    </div>
  )
}

