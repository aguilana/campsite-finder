import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../../features/auth/authSlice';
import Button from '@mui/material/Button';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    let firstName = '';
    let lastName = '';

    if (formName === 'signup') {
      firstName = evt.target.firstName.value;
      lastName = evt.target.lastName.value;
    }
    dispatch(
      authenticate({
        firstName,
        lastName,
        email,
        password,
        method: formName,
      })
    );
  };

  return (
    <div className='mt-20 flex flex-col flex-1 items-center pt-20'>
      <form onSubmit={handleSubmit} name={name}>
        {name === 'signup' ? (
          <div>
            <div>
              <label htmlFor='firstName'>
                <small>First name</small>
              </label>
              <input name='firstName' type='text' />
            </div>
            <div>
              <label htmlFor='lastName'>
                <small>Last name</small>
              </label>
              <input name='lastName' type='text' />
            </div>
          </div>
        ) : null}
        <div>
          <label htmlFor='email'>
            <small>Email</small>
          </label>
          <input name='email' type='text' />
        </div>
        <div>
          <label htmlFor='password'>
            <small>Password</small>
          </label>
          <input name='password' type='password' />
        </div>
        <div>
          <Button type='submit' variant='contained' color='primary'>
            {displayName}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
