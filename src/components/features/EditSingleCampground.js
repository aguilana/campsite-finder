import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editSingleCampgroundAsync,
  selectSingleCampground,
} from '../../features/slices/singleCampgroundSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';

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
    <>
      <h1>EDIT CAMPGROUND</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input type='text' name='name' value={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='price'>Price: $</label>
          <input
            type='text'
            name='price'
            value={price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='description'>Description: </label>
          <input
            type='text'
            name='description'
            value={description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='location'>Location: </label>
          <input
            type='text'
            name='location'
            value={location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='imageUrl'>Image Url: </label>
          <input
            type='text'
            name='imageUrl'
            src=''
            value={imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Update Campground</button>
      </form>
      <footer>
        <Link to={`/campgrounds/${id}`}> Back to Campground</Link>
        <br />
        <Link to='/campgrounds'>All Campgrounds</Link>
      </footer>
    </>
  );
};

export default EditSingleCampground;
