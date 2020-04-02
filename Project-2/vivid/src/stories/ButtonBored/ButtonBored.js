import React from 'react';



const ButtonBoredReload = (props) => (
  <button onClick={() => window.location.reload(false)} className={props.button} style={props.style}>
    {props.label}
  </button>
)

export default ButtonBoredReload;
