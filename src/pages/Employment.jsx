import React from 'react'
import styled from 'styled-components'
import EmploymentForm from '../components/EmploymentForm'

function Employment() {
  return (
    <Wrapper>
      <img src="https://taalogistics.com/images/employment_header.png" alt="employment banner" />
      <EmploymentForm />
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
export default Employment




