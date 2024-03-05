import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Wrapper>
      <h1>Home</h1>
      <p>Welcome to our home page</p>

    </Wrapper>
  )
}

const Wrapper = styled.main`

  flex: 1;
  
  display: flex;
  flex-direction: column;
  width: 100%;

  border: 1px solid black;
`

export default Home