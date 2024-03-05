import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Nav() {
  return (
    <Wrapper>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/rates">Rates</Link>
        <Link to="/employment">Employment</Link>
        <Link to="/contact">Contact</Link>   
    </Wrapper>
  )
}

const Wrapper = styled.nav` 
    flex: 1;
    display: flex; 
    gap: 20px;
    justify-content: space-around;

    a{
        font-size: 1.2rem;
        font-weight: 700;
        text-decoration: none;
        color: black;
    }

    a:hover{
        color: var(--hover-blue)
    }

    a:active{
        color: var(--active-blue)
    }

`
export default Nav