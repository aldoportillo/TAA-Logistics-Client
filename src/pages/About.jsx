import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Wrapper>
      <img src="https://taalogistics.com/images/aboutheader.jpg" alt="about banner" />

      <p>As a proud family-owned and operated transportation company, we are deeply committed to the future of our industry. Since our inception in 1995, we have been a driving force in the trucking sector, operating across two countries and amassing over 5,000,000 miles of experience. This journey has propelled us to the forefront of transportation.</p>

      <p>At the heart of TAA Logistics are our original drivers, the three owners who laid the foundation for our success. As we've grown, so has our dedication to hiring passionate drivers who are not only committed to their families and communities but also to excellence in their profession. We believe in the importance of providing a good living for our team, which is why we ensure they drive clean, late-model equipment.</p>

      <p>We strive to inspire our team to be industry leaders, embodying the professional values and culture of TAA Logistics, Inc. Our employees thrive in a trusting and empowering atmosphere, fostering a strong, healthy, and enjoyable work environment.</p>

      <p>Welcome to TAA Logistics, where we're confident you'll find happiness and fulfillment.</p>
    </Wrapper>
  )
}

const Wrapper = styled.main`

  flex: 1;
  margin: 0 10vw;
  display: flex;
  flex-direction: column;
  width: auto;

  p{
    padding: 10px 0;
    font-size: 1.2rem;
  }
`
export default About