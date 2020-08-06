import React, { useState, useEffect } from 'react';
import './nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => window.removeEventListener('scroll');
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="nav__logo"
      />

      <img
        // src="https://pbs.twimg.com/profile_images/124011999041155"
        src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/116277083/original/b687431d2dc4e6f66692a75d9bff6d9fb88a8390/create-a-discord-profile-picture-animated-or-nonanimated.jpg"
        alt="nav avatar"
        className="nav__avatar"
      />
    </div>
  );
};

export default Nav;
