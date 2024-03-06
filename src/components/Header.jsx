import styled from 'styled-components'
import Logo from '../assets/logo.png'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Wrapper>
      <Link to="/"><img src={Logo} alt="logo" /></Link>
      <Nav />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  height: 100px;
  align-items: center;
  background-color: var(--accent-white);
  
  padding: 0 0 0 30px;

  img {
    max-width: 150px;
  }

  background-color: var(--accent-white);

`

export default Header