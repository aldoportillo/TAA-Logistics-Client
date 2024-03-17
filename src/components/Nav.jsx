import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav({ isMenuOpen }) {
  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <Link to="/services">SERVICES</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/rates">RATES</Link>
      <Link to="/employment">EMPLOYMENT</Link>
      <Link to="/contact">CONTACT</Link>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  flex: 1;
  display: flex;
  gap: 20px;
  justify-content: space-around;

  a {
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: var(--hover-blue);
  }

  a:active {
    color: var(--active-blue);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100px;
    right: 0;
    background-color: var(--accent-white);
    width: 200px;
    transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;

    a {
      text-align: center;
      padding: 10px;
    }
  }
`;

export default Nav;
