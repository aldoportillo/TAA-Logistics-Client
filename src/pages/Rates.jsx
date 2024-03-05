import React from 'react'
import styled from 'styled-components'
import RatesForm from '../components/RatesForm'

function Rates() {
  return (
    <Wrapper>
      <img src="https://taalogistics.com/images/rate_header.jpg" alt="rates banner" />
      <RatesForm />
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

export default Rates