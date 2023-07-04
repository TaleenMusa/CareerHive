import React from 'react'
import Registration from '../../components/LogReg/Registration';
import Login from '../../components/LogReg/Login';
const LogReg = (props) => {
  const {user , setUser} = props;
  return (
    <div className='row'>
      <div className='col'>
      <Registration/>
      </div>
      <div className='col'>
      <Login user={user} setUser={setUser}/>
      </div>
        
    </div>
  )
}

export default LogReg;