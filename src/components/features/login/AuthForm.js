import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../../features/auth/authSlice';
import Camping from '../../../assets/images/camping.jpg';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'firstName') setFirstName(e.target.value);
    if (e.target.name === 'lastName') setLastName(e.target.value);
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFormSubmitted(true);
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    let firstName = '';
    let lastName = '';

    if (formName === 'signup') {
      firstName = evt.target.firstName.value;
      lastName = evt.target.lastName.value;
    }
    if (email !== '' && password !== '') {
      dispatch(
        authenticate({
          firstName,
          lastName,
          email,
          password,
          method: formName,
        })
      );
      navigate('/campgrounds');
    }
  };

  return (
    <div className='relative bg-scroll flex-1 mt-20 p-20 flex flex-col justify-center items-center'>
      <img
        className='absolute inset-0 object-cover w-full h-full z-[-1] filter blur-[2px]'
        src={Camping}
        alt='mountains in calofornia'
      />
      <form
        onSubmit={handleSubmit}
        name={name}
        className='bg-gray-800 bg-opacity-90 px-8 py-6 rounded-lg shadow-md max-w-md w-full'
        noValidate={true}
      >
        {name === 'signup' ? (
          <div>
            <div className='pb-4'>
              <TextField
                label='firstName'
                name='firstName'
                value={firstName}
                onChange={handleChange}
                variant='filled'
                fullWidth
                required
                error={formSubmitted && !firstName}
                helperText={
                  formSubmitted && !firstName && 'firstName is required'
                }
                inputProps={{
                  style: { color: '#f7f7f7' },
                }}
                InputLabelProps={{
                  style: { color: '#f7f7f7' },
                }}
              />
            </div>
            <div className='pb-4'>
              <TextField
                label='lastName'
                name='lastName'
                value={lastName}
                onChange={handleChange}
                variant='filled'
                fullWidth
                required
                error={formSubmitted && !lastName}
                helperText={
                  formSubmitted && !lastName && 'lastName is required'
                }
                inputProps={{
                  style: { color: '#f7f7f7' },
                }}
                InputLabelProps={{
                  style: { color: '#f7f7f7' },
                }}
              />
            </div>
          </div>
        ) : null}
        <div className='pb-4'>
          <TextField
            label='email'
            name='email'
            value={email}
            onChange={handleChange}
            variant='filled'
            fullWidth
            required
            error={formSubmitted && !email}
            helperText={formSubmitted && !email && 'email is required'}
            inputProps={{
              style: { color: '#f7f7f7' },
            }}
            InputLabelProps={{
              style: { color: '#f7f7f7' },
            }}
          />
        </div>
        <div className='pb-4'>
          <TextField
            label='password'
            name='password'
            value={password}
            onChange={handleChange}
            variant='filled'
            fullWidth
            required
            error={formSubmitted && !password}
            helperText={formSubmitted && !password && 'password is required'}
            inputProps={{
              style: { color: '#f7f7f7' },
            }}
            InputLabelProps={{
              style: { color: '#f7f7f7' },
            }}
          />
        </div>
        <div className='pb-4'>
          <Button type='submit' variant='contained' color='primary'>
            {displayName}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
