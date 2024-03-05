import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components'

//Will get this fetched from the backend and map over it. Customer can adjust their services :) Dont forget to also store images in blob store and get the url from the backend
const service_data = {
  services: [
    {
      id: 1,
      title: "Clean, Late Model Tractors",
      description: "Our drivers are equipped with late model equipment to meet FMCSA and DOT requirements and eliminate delivery delays due to breakdowns and \"Out Of Service\" issues.",
      image: "https://taalogistics.com/images/clmt.jpg"
    },
    {
      id: 2,
      title: "Power Only Division",
      description: "We will haul your trailers to their final destinations, safely!",
      image: "https://taalogistics.com/images/dryvan.jpg"
    },
    {
      id: 3,
      title: "Maintenance & Repair",
      description: "Full time mechanics trained to keep our fleet of trucks and chassis DOT compliant and on the road delivering your products on time.",
      image: "https://taalogistics.com/images/maint_gold.jpg"
    },
    {
      id: 4,
      title: "Intermodal",
      description: "Our drivers are trained and cleared to pull from and deliver to 90% of the Chicagoland ramps!",
      image: "https://taalogistics.com/images/truck719.jpg",

    },
    {
      id: 5,
      title: "Dry Van",
      description: "Our late model Great Dane and Wabash 53' dry vans are food grade ready with large carbon composite plates for reinforced decks.",
      image: "https://taalogistics.com/images/intermodal.jpg",

    },
    {
      id: 6,
      title: "ISO Tank",
      description: "We have dedicated CDL Tanker endorsed drivers at the ready to transport your bulk products to market.",
      image: "https://taalogistics.com/images/tamker.jpg",

    },
    {
      id: 7,
      title: "Secure Yard",
      description: "Our gated yard has over 100 secure parking spaces for storage of your goods until it is ready for delivery.",
      image: "https://taalogistics.com/images/secure_yard.jpg",

    },
    {
      id: 8,
      title: "Transloading",
      description: "Our access to containers, dry van trailers, and a trans-dock allows us to assist in getting your specific product needs to and from multiple locations.",
      image: "https://taalogistics.com/images/transloading.jpg",

    },
    {
      id: 9,
      title: "HazMat",
      description: "Our CDL DOT HazMat certified and endorsed drivers are here ready to pull your placarded frac and ISO tanks to their final destinations.",
      image: "https://taalogistics.com/images/poweronly.jpg",

    },
  ]
}

function Services() {
  return (
    <Wrapper>
      <h1>Services</h1>
      <p>TAA Logistics Currently Offers:</p>

      <div className="cards-container">
        {service_data.services.map((service) => {
          return <Card key={service.id} title={service.title} description={service.description} image={service.image} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`

margin: 0 10vw;
display: flex;
flex-direction: column;
align-items: center;


.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
  }
`

export default Services