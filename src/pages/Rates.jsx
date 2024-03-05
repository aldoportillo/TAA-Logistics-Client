import React from 'react'
import styled from 'styled-components'

function Rates() {
  return (
    <Wrapper>
      <img src="https://taalogistics.com/images/rate_header.jpg" alt="rates banner" />
    </Wrapper>
  )
}

const Wrapper = styled.main`

  flex: 1;
  margin: 0 10vw;
  display: flex;
  flex-direction: column;
  width: auto;
  border: 1px solid black;
`

export default Rates