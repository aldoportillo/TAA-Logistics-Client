import React from "react";
import styled from "styled-components";

function ContactForm() {
  return (
    <Wrapper>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required></input>
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required></input>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required></input>
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Submit</button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  flex: 1;
  margin: 0 10vw;
  display: flex;
  flex-direction: column;
  width: auto;
  color: black;
  label {
    margin: 10px 0;
  }
  input,
  textarea {
    margin: 10px 0;
  }
  button {
    margin: 10px 0;
  }
`;

export default ContactForm;
