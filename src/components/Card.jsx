import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Card({ title, description, image }) {
  return (
    <Wrapper>
            <img src={image} alt={title} />
            <div className="card-text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    background-color: var(--hover-blue);
    border: 1px solid var(--green);
    color: white;
    border-radius: 10px;
    flex: 1 1 250px;
    max-width: 290px;

    .card-text {
        padding: 10px 20px 0px 10px;
    }
    img {
        width: 100%; /*Set Flex basis later*/
        border-radius: 10px 10px 0 0;
    }
    
`

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

  
export default Card