import React, { useState, useEffect } from 'react';
// image
import HeroImage from '../../assets/images/image-hero-desktop.png';
import HeroImageMobile from '../../assets/images/image-hero-mobile.png';

// client images
import Audiophile from '../../assets/images/client-audiophile.svg';
import Databiz from '../../assets/images/client-databiz.svg';
import Maker from '../../assets/images/client-maker.svg';
import Meet from '../../assets/images/client-meet.svg';

const Home = () => {
  const [src, setSrc] = useState(HeroImage);

  useEffect(() => {
    const updateSrc = () => {
      if (window.innerWidth <= 768) {
        setSrc(HeroImageMobile);
      } else {
        setSrc(HeroImage);
      }
    };
    updateSrc();
    window.addEventListener('resize', updateSrc);
    return () => window.removeEventListener('resize', updateSrc);
  }, []);

  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__content-heading">
          Make <br /> remote work
        </h1>
        <p className="hero__content-description">
          Get your team in sync, no matter your location. Streamline process, create team rituals,
          and watch, and watch productivity soar
        </p>
        <button className="hero__content-btn">Learn more</button>
        <div className="hero__content-client">
          <img src={Audiophile} alt="audiophile" />
          <img src={Databiz} alt="databiz" />
          <img src={Maker} alt="maker" />
          <img src={Meet} alt="meet" />
        </div>
      </div>
      <div className="hero__image">
        <img src={src} alt="hero-image" />
      </div>
    </div>
  );
};

export default Home;
