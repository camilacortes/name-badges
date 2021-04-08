import React from 'react';

function FinalBadge(props){

    return(
      <div className="final-badge-container">
        <div className="final-badge-border">
          {props.firstName}
        </div>
      </div>
    )
}

export default FinalBadge