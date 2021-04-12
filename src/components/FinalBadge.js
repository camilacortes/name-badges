import React from 'react';

function FinalBadge(props){
  const badgesLoop = props.badges.map(item =>{
   return (
     <>
     <div className="badge-header">Badge: </div>
     <div className="badge-contents">
       
      <p> First Name: {item.firstName}</p>
      <p> Last Name: {item.lastName}</p>
      <p> Email : {item.email}</p>
      <p> Birthplace: {item.birthPlace}</p>
      <p> Phone: {item.phone}</p>
      <p> Favorite Food: {item.faveFood}</p>
      <p className="new-about"> About: {item.about}</p>
    </div>
    </>
   )
  })
    return(
      

      <div className="final-badge-container">
        <div className="final-badge-border">
         {badgesLoop}
        </div>
      </div>
    )
}

export default FinalBadge