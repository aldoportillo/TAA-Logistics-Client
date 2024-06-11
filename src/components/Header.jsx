import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <Wrapper>
      <Link to="/" onClick={handleLinkClick}><img src={Logo} alt="TAA Logistics Inc Logo" /></Link>
      <title className='sr-only'>TAA Logistics</title>

      {windowWidth <= 768 && (
        <Hamburger 
        toggled={isMenuOpen} 
        toggle={setIsMenuOpen} 
        aria-expanded={isMenuOpen ? "true" : "false"}
        role="button" 
        aria-label="Hamburger Menu Button" 
    />
    
      )}

      <title className='sr-only'>TAA Logistics Inc</title>
      <Nav isMenuOpen={isMenuOpen} handleLinkClick={handleLinkClick} />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  height: 100px;
  align-items: center;
  background-color: var(--accent-white);
  padding: 0 30px;
  justify-content: space-between;

  img {
    max-width: 150px;
  }

  .hamburger-react {
    z-index: 1;
  }
`;

export default Header;