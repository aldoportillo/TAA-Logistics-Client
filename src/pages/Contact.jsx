import React from 'react'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <Wrapper >
      <img src="https://taalogistics.com/gallery/17037850493.jpg" alt="contact banner" />
      <ContactForm />
      <div className="text-center">
        Address:
        18949 Wolf Rd,
        Mokena, IL 60448
        <br />
        <a href="tel:7085675424">(708) 567-5424</a>
      </div>
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