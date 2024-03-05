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
  margin: 0 10vw;
  display: flex;
  flex-direction: column;
  width: auto;

`

export default Home