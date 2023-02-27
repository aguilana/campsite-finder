import React from 'react';
/* Imported Components */
import { Home } from './';
import { Campgrounds, SingleCampground, CreateCampground } from './pages';
import { EditSingleCampground } from './features';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes className='flex-1'>
      <Route path='/' element={<Home />} />
      <Route path='/campgrounds' element={<Campgrounds />} />
      <Route path='/campgrounds/create' element={<CreateCampground />} />
      <Route path='/campgrounds/:id' element={<SingleCampground />} />
      <Route path='/campgrounds/:id/edit' element={<EditSingleCampground />} />
    </Routes>
  );
};

export default AppRoutes;
