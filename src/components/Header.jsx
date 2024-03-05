import styled from 'styled-components'
import Logo from '../assets/logo.png'
import Nav from './Nav'

function Header() {
  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
      <Nav />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  height: 100px;
  align-items: center;

  img {
    max-height: 100px;
  }

  background-color: var(--accent-white);

`

export default Header