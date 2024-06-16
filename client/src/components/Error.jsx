import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card" style={{backgroundColor: '#d1e7dd'}}>
        <div className="card-body text-center">
          <h2 className="card-title text-danger">User Already Registered</h2>
          <p className="card-text lead">Sorry, it seems like the user is already registered.</p>
          <p className="card-text">Please try again with a different email or <Link to="/" className="text-primary">go back to home</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
