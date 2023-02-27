import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCampgroundAsync } from '../../features/slices/campgroundSlice';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import Camping from '../../assets/images/camping.jpg';

const CreateCampground = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'price') setPrice(e.target.value);
    if (e.target.name === 'description') setDescription(e.target.value);
    if (e.target.name === 'location') setLocation(e.target.value);
    if (e.target.name === 'imageUrl') setImage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      if (name == '' || price == '' || description == '' || location == '') {
        alert("can't create campground. Please fill out required fields");
      } else {
        await dispatch(
          createCampgroundAsync({
            name,
            price,
            description,
            location,
            imageUrl,
          })
        );
        setName('');
        setPrice('');
        setDescription('');
        setLocation('');
        alert(
          'new campground created. We will redirect you to that campground'
        );
        // navigate to the /campgrounds/:id
        navigate(`/campgrounds`);
      }
    } catch (err) {
      throw new Error('Error: ', err);
    }
  };

  return (
    <div className=' relative bg-scroll flex-1 mt-20 p-20 flex flex-col justify-center items-center'>
      <img
        className='absolute inset-0 object-cover w-full h-full z-[-1] filter blur-[2px]'
        src={Camping}
        alt='mountains in calofornia'
      />
      <form
        onSubmit={handleSubmit}
        className='bg-gray-800 bg-opacity-90 px-8 py-6 rounded-lg shadow-md max-w-md w-full'
        noValidate={true}
      >
        <div className='pb-4'>
          <TextField
            label='Name'
            name='name'
            value={name}
            onChange={handleChange}
            variant='filled'
            fullWidth
            required
            error={formSubmitted && !name}
            helperText={formSubmitted && !name && 'Name is required'}
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
            label='Price'
            name='price'
            value={price}
            onChange={handleChange}
            variant='filled'
            fullWidth
            required
            error={formSubmitted && !price}
            helperText={formSubmitted && !price && 'Price is required'}
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
            label='Description'
            name='description'
            value={description}
            onChange={handleChange}
            variant='filled'
            fullWidth
            required
            multiline
            maxRows={4}
            error={formSubmitted && !description}
            helperText={
              formSubmitted && !description && 'Description is required'
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
            label='Location'
            name='location'
            value={location}
            onChange={handleChange}
            variant='filled'
            fullWidth
            required
            error={formSubmitted && !location}
            helperText={formSubmitted && !location && 'Location is required'}
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
            label='Image Url'
            name='imageUrl'
            value={imageUrl}
            onChange={handleChange}
            variant='filled'
            fullWidth
            inputProps={{
              style: { color: '#f7f7f7' },
            }}
            InputLabelProps={{
              style: { color: '#f7f7f7' },
            }}
          />
        </div>
        <div className='flex justify-center items-center w-[60%] pb-2'>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            className='md:text-[8px]'
          >
            Create Campground
          </Button>
        </div>
      </form>
      <footer>
        <Link to='/campgrounds'>All Campgrounds</Link>
      </footer>
    </div>
  );
};

export default CreateCampground;
