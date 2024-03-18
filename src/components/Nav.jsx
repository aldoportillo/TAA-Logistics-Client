import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';



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
    position: fixed; /* Change this from absolute to fixed */
    top: 0; /* Change this to 0 to start from the top */
    height: 100vh; /* This will make it span the entire height */
    gap: 5px;
    justify-content: flex-start;
    right: 0;
    background-color: var(--accent-white);
    width: 200px;
    transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    padding-top: 100px; /* Add padding to the top to avoid overlap with the header */

    a {
      text-align: center;
      padding: 10px;
    }
  }

  
`;

Nav.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
};

Wrapper.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
};


export default Nav;
