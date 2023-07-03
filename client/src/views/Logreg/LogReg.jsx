import React from 'react'
import Registration from '../../components/LogReg/Registration';
import Login from '../../components/LogReg/Login';
const LogReg = () => {
  return (
    <div className='row'>
      <div className='col'>
      <Registration/>
      </div>
      <div className='col'>
      <Login/>
      </div>
        
    </div>
  )
}

export default LogReg;