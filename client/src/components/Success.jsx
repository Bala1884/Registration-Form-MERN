import React from 'react';


const RegistrationSuccess = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-dark">
      <div className="alert alert-success" role="alert">
        <h1 className="alert-heading">Registration Successful!</h1>
        <p>Thank you for registering. Your account has been created successfully.</p>
        <hr />
        
      </div>
    </div>
  );
};

export default RegistrationSuccess;