import React from 'react';
import './Header.scss';

const Header = ({ header }) => {
  return (
    <header role='banner' className='header-main'
      style={{
        backgroundImage: `url(${header.hero_image})`
      }}>
      <div className='container hero-content'>
        <img src={header.logo_image} alt={header.logo_alt} />
        <h1>{header.headline}</h1>
        <h4>{header.sub_headline}</h4>
      </div>
    </header>
  )
};

export default Header;
