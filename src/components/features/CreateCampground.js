import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCampgroundAsync } from "../../features/campgroundSlice";
import { Link } from "react-router-dom";

const CreateCampground = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("")

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "price") setPrice(e.target.value);
    if (e.target.name === "description") setDescription(e.target.value);
    if (e.target.name === "location") setLocation(e.target.value);
    if (e.target.name === "image") setImage(e.target.value);
  };

  const handleClick = () => {
    console.log("submitted");
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(
        createCampgroundAsync({ name, price, description, location })
      );
      setName("");
      setPrice("");
      setDescription("");
      setLocation("");
      alert("new campground created. We will redirect you to that campground");
    } catch (err) {
      throw new Error("Error: ", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            value={image}
            src=""
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleClick}>
          Create Campground
        </button>
      </form>
      <footer>
        <Link to="/campgrounds">All Campgrounds</Link>
      </footer>
    </>
  );
};

export default CreateCampground;
