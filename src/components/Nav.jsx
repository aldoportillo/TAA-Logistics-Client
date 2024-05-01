import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';



function Nav({ isMenuOpen, handleLinkClick }) {
  
    return (
        <Wrapper isMenuOpen={isMenuOpen}>
            {/* <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? 'text-blue-600 font-extrabold px-3 py-2 rounded-md' : 'text-gray-600 hover:text-blue-500 font-bold px-3 py-2 rounded-md'
        }
      >
        SERVICES 
      </NavLink> */} {/* Consider Reimplementing */}
      <NavLink
        to="/about"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? 'text-blue-600 font-extrabold px-3 py-2 rounded-md' : 'text-gray-600 hover:text-blue-500 font-bold px-3 py-2 rounded-md'
        }
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/rates"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? 'text-blue-600 font-extrabold px-3 py-2 rounded-md' : 'text-gray-600 hover:text-blue-500 font-bold px-3 py-2 rounded-md'
        }
      >
        RATES
      </NavLink>
      <NavLink
        to="/employment"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? 'text-blue-600 font-extrabold px-3 py-2 rounded-md' : 'text-gray-600 hover:text-blue-500 font-bold px-3 py-2 rounded-md'
        }
      >
        EMPLOYMENT
      </NavLink>
      <NavLink
        to="/events"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? 'text-blue-600 font-extrabold px-3 py-2 rounded-md' : 'text-gray-600 hover:text-blue-500 font-bold px-3 py-2 rounded-md'
        }
      >
        EVENTS
      </NavLink>
      <NavLink
        to="/contact"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? 'text-blue-600 font-extrabold px-3 py-2 rounded-md' : 'text-gray-600 hover:text-blue-500 font-bold px-3 py-2 rounded-md'
        }
      >
        CONTACT
      </NavLink>

        </Wrapper>
    )
}

const Wrapper = styled.nav`
  flex: 1;
  display: flex;
  gap: 20px;
  justify-content: space-around;

 

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
    handleLinkClick: PropTypes.func.isRequired,
};

Wrapper.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
};


export default Nav;
