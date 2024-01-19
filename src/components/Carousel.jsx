import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Cards from "./MainApi"

const Carousel = () => {

  const [data, setData] = useState(Cards)

  const responsive = {
    1366: {
      items: 4,
    },
    1200: {
      items: 3,
    },
    992: {
      items: 2,
    },
    768: {
      items: 2,
    },
    576: {
      items: 1,
    },
    400: {
      items: 1,
    },
    280: {
      items: 1,
    },
  };


  const item = data.map((value) => {
      return (
        <div className="cards">
          <div
            className="body-card"
            key={value.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <img src={value.img} />
            <h2 className="card-title">{value.title}</h2>
          </div>
        </div>
      )
    
  })


  return (
    <div className="carouselBody">
      <AliceCarousel
        items={item}
        responsive={responsive}
        disableDotsControls="true"
        infinite="true"
      />
    </div>
  )
}

export default Carousel