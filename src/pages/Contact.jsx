import React from 'react'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <Wrapper>
      <img src="https://taalogistics.com/gallery/17037850493.jpg" alt="contact banner" />
      <h1>Contact Us</h1>
      Address:
      18949 Wolf Rd,
      Mokena, IL 60448

Phone: (708) 567-5424
    
    <ContactForm />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  
    flex: 1;
    margin: 0 10vw;
    display: flex;
    flex-direction: column;
    width: auto;

    color: black;
  `

export default Contact