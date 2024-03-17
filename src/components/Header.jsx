import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <Link to="/"><img src={Logo} alt="logo" /></Link>
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Nav isMenuOpen={isMenuOpen} />
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
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: black;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Header;
