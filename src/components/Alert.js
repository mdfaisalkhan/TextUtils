import React from 'react'

function Alert(props) {

    const closeAlert = () => {
        const alertContainer = document.getElementById('alert-container');
        if (alertContainer) {
          alertContainer.style.display = 'none';
        }
        
      };

  return (
    <div style={{height: '50px'}}>

    {props.alert&&<div className={`alert-${props.alert.type}`} id='alert-container'>
  <strong>{props.alert.type}!</strong> <span className='indicator'>{props.alert.msg}</span>
</div>}
    </div>
  
  )
}

export default Alert
