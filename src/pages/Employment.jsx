import React from 'react'
import styled from 'styled-components'

function Employment() {
  return (
    <Wrapper>
      <img src="https://taalogistics.com/images/employment_header.png" alt="employment banner" />
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
export default Employment
