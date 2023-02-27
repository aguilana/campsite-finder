import React from 'react';
import { useSelector } from 'react-redux';
/* Imported Components */
import { Footer, NavBar } from './features';
import AppRoutes from './AppRoutes';

const Main = () => {
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  return (
    <div className='flex flex-col min-h-screen'>
      {/* ---- NavBar ---- */}
      <NavBar isAdmin={isAdmin} />
      <AppRoutes />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Main;
