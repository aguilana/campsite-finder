import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editSingleCampgroundAsync,
  fetchSingleCampground,
  selectSingleCampground,
} from '../../../features/slices/singleCampgroundSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import Mountains from '../../../assets/images/mountains.jpg';

const EditSingleCampground = () => {
  const { id } = useParams();
  console.log('ID: ', id);
  const navigate = useNavigate();

  const campground = useSelector(selectSingleCampground);
  console.log('campground: ', campground);

  const [name, setName] = useState(campground.name);
  const [price, setPrice] = useState(campground.price);
  const [description, setDescription] = useState(campground.description);
  const [location, setLocation] = useState(campground.location);
  const [imageUrl, setImageUrl] = useState(campground.imageUrl);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'price') setPrice(e.target.value);
    if (e.target.name === 'description') setDescription(e.target.value);
    if (e.target.name === 'location') setLocation(e.target.value);
    if (e.target.name === 'imageUrl') setImageUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (price === '' || price < 0 || isNaN(price)) {
        alert('Enter valid price. If free then enter 0');
        // return next()
      } else {
        await dispatch(
          editSingleCampgroundAsync({
            id,
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
        alert('edited the campground');
        navigate(`/campgrounds/${id}`);
      }
    } catch (err) {
      throw new Error('Error: ', err);
    }
  };

  return (
    <div className='mt-20 p-16 flex flex-col items-center flex-1 relative bg-scroll'>
      <img
        className='absolute inset-0 object-cover w-full h-full z-[-1] filter blur-[2px]'
        src={Mountains}
        alt='mountains in calofornia'
      />
      <h1 className='text-[3rem] pb-2'>EDIT CAMPGROUND</h1>
      <form
        onSubmit={handleSubmit}
        className='bg-gray-800 bg-opacity-90 px-8 py-6 rounded-lg shadow-md max-w-md w-full'
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
            label='Price ($)'
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
        <button type='submit'>Update Campground</button>
      </form>
      <footer>
        <Link to={`/campgrounds/${id}`}> Back to Campground</Link>
        <br />
        <Link to='/campgrounds'>All Campgrounds</Link>
      </footer>
    </div>
  );
};

export default EditSingleCampground;
