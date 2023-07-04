import React from 'react';
import Admin from '../../components/Admin/Admin';
import NavBar from '../../components/NavBar/NavBar';

const SuperAdmin = () => {
  const isAdmin = true;

  if (!isAdmin) {
    return <Redirect to="/Dashboard"/>;
  }

  return (
    <div>
      <Admin jobData={[]} /> 
    </div>
  );
};

export default SuperAdmin;
