import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCampgroundAsync } from '../../features/slices/campgroundSlice';
import { Link } from 'react-router-dom';

const CreateCampground = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImage] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'price') setPrice(e.target.value);
    if (e.target.name === 'description') setDescription(e.target.value);
    if (e.target.name === 'location') setLocation(e.target.value);
    if (e.target.name === 'imageUrl') setImage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      }
    } catch (err) {
      throw new Error('Error: ', err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='price'>Price: $</label>
          <input
            type='text'
            name='price'
            value={price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='description'>Description: </label>

          <textarea
            type='text'
            name='description'
            value={description}
            onChange={handleChange}
            required
            cols='50'
            rows='10'
            style={{ maxHeight: '100px', maxWidth: '350px' }}
            placeholder='description'
          />
        </div>
        <div>
          <label htmlFor='location'>Location: </label>
          <input
            type='text'
            name='location'
            value={location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='imageUrl'>Image Url: </label>
          <input
            type='text'
            name='imageUrl'
            value={imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Create Campground</button>
      </form>
      <footer>
        <Link to='/campgrounds'>All Campgrounds</Link>
      </footer>
    </>
  );
};

export default CreateCampground;
