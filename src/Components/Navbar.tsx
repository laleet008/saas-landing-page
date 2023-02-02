import React, { useState, useEffect, useRef } from 'react';
// icon
import { AiOutlineClose } from 'react-icons/ai';

import { FeatureNav } from './Features';

import Company from './Company';
import Features from './Features';

const Navbar: React.FC = () => {
  const [featureOpen, setFeatureOpen] = useState(false);
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
  const [activeFeatures, setActiveFeature] = useState(false);
  const [activeCompany, setActiveCompany] = useState(false);
  const refValue = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (refValue.current && !refValue.current.contains(event.target as Node)) {
      setFeatureOpen(false);
      setCompanyMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const MobileView = () => {
    return (
      <div className="mobile">
        <div className="mobile-left"></div>
        <div className="mobile-right">
          <div className={`nav__items-mobile`}>
            <div
              onMouseOver={() => setActiveFeature(true)}
              onMouseOut={() => setActiveFeature(false)}>
              <p
                className={`nav__items-item  dropdown ${featureOpen ? 'open-menu' : ''} ${
                  activeFeatures ? 'multiple-feature' : ''
                } `}
                onClick={() => setFeatureOpen((s) => !s)}>
                Features
              </p>
              {featureOpen && (
                <div className="active_card_container">
                  {FeatureNav.map((feature) => {
                    return (
                      <div key={feature.name} className="active_card_container-item">
                        <img src={feature.icon} alt="" />
                        <p>{feature.name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div
              onMouseOver={() => setActiveCompany(true)}
              onMouseOut={() => setActiveCompany(false)}>
              <p
                className={`nav__items-item  dropdown ${companyMenuOpen ? 'open-menu' : ''} ${
                  activeCompany ? 'multiple-feature' : ''
                } `}
                onClick={() => setCompanyMenuOpen((k) => !k)}>
                Company
              </p>
              {companyMenuOpen && (
                <div className="active_card_container">
                  <p>History</p>
                  <p>Our Team</p>
                  <p>Blog</p>
                </div>
              )}
            </div>
            <a href="#">
              <p className="nav__items-item careers">Careers</p>
            </a>
            <a href="#">
              <p className="nav__items-item about">About</p>
            </a>
          </div>
          <div className="nav__right-mobile">
            <button className="nav__right-login nav__right-btn">Login</button>
            <button className="nav__right-register nav__right-btn">Register</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {showMenu && <MobileView />}

      <div className="navbar">
        <div className="nav">
          <div className="nav__left">
            <a className="nav__heading" href="#">
              <h1>snap</h1>
            </a>
            <div className={`nav__items`}>
              <div
                onMouseOver={() => setActiveFeature(true)}
                onMouseOut={() => setActiveFeature(false)}>
                <p
                  className={`nav__items-item  dropdown ${featureOpen ? 'open-menu' : ''} ${
                    activeFeatures ? 'multiple-feature' : ''
                  } `}
                  onClick={() => setFeatureOpen((s) => !s)}>
                  Features
                </p>
                {(featureOpen || activeFeatures) && <Features myRef={refValue} />}
              </div>

              <div
                onMouseOver={() => setActiveCompany(true)}
                onMouseOut={() => setActiveCompany(false)}>
                <p
                  className={`nav__items-item  dropdown ${companyMenuOpen ? 'open-menu' : ''} ${
                    activeCompany ? 'multiple-feature' : ''
                  } `}
                  onClick={() => setCompanyMenuOpen((k) => !k)}>
                  Company
                </p>
                {(companyMenuOpen || activeCompany) && <Company myRef={refValue} />}
              </div>
              <a href="#">
                <p className="nav__items-item careers">Careers</p>
              </a>
              <a href="#">
                <p className="nav__items-item about">About</p>
              </a>
            </div>
            <div onClick={() => handleMenu()} className={`navbar-toggle `}>
              {showMenu ? (
                <AiOutlineClose className="navbar-toggle-close" />
              ) : (
                <p>
                  <span className="navbar-toggle-icon"></span>
                  <span className="navbar-toggle-icon"></span>
                  <span className="navbar-toggle-icon"></span>
                </p>
              )}
            </div>
          </div>
          <div className="nav__right">
            <button className="nav__right-login nav__right-btn">Login</button>
            <button className="nav__right-register nav__right-btn">Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
