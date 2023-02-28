import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import LoginIcon from '../../../assets/icons/loginIcon.png';

const Navbar = ({ isAdmin }) => {
  const LOGIN = (
    <img
      src={LoginIcon}
      style={{ height: '50px', width: '50px', color: '#f5f5f5' }}
    />
  );
  // links for the navbar
  const Links = [
    { name: 'Home', path: '/' },
    { name: 'Campgrounds', path: '/campgrounds' },
    { name: 'Create Site', path: '/campgrounds/create' },
    {
      name: 'Login',
      path: '/login',
    },
  ].filter(Boolean);

  // state for the navbar open and close functionality
  const [open, setOpen] = useState(false);
  const [hideNavBar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log('window.scrollY: ', window.scrollY);
      if (window.scrollY > 65) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log('hideNavBar: ', hideNavBar);

  return (
    <nav
      className={`w-full fixed top-0 left-0 bg-transparent h-20 z-20 text-[#f5f5f5] transition-all duration-300 ease-in ${
        hideNavBar ? '-top-96' : ''
      }`}
    >
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7 max-w-6xl mx-auto gap-3'>
        <div className='font-bold lg:text-5xl md:text-4xl text-3xl cursor-pointer flex items-center'>
          <h2>
            {' '}
            <Link to='/'>c@MP 👁 </Link>
          </h2>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden items-center'
        >
          {open ? (
            <AiOutlineClose size={30} name={open ? 'close' : 'menu'} />
          ) : (
            <AiOutlineMenu size={30} name={open ? 'close' : 'menu'} />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-20 z-20 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:bg-transparent ${
            open ? 'top-20 bg-[#9e9d9da0] z-50 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={link.name}
              className='md:ml-8 text-xl md:my-0 my-7 xl:text-2xl lg:text-xl md:text-base z-20'
            >
              <Link
                to={link.path}
                className='text-[#f5f5f5] hover:text-[#f5f5f550] duration-500'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
