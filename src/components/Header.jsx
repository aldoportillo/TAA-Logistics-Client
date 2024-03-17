import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <Link to="/"><img src={Logo} alt="logo" /></Link>
      <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
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

export default Header;