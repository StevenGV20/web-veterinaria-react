import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './_.css'

export default function Carousel({
  numItems,numView,children,...props
}) {
  const [carouselItems, setCarouselItems] = useState(children);
  useEffect(() => {
    setCarouselItems([...children]);
  }, [children]);

  return (
    <div className="carousel-container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={numItems}
        visibleSlides={numView}
        currentSlide={1}
        infinite={true}
      >
        <Slider>
          {carouselItems.map((item, index) => (
            <Slide index={index} key={index} className="carousel-item">
              {item}
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="carousel-arrow back"> {'<'} </ButtonBack>
        <ButtonNext className="carousel-arrow next"> {'>'} </ButtonNext>
      </CarouselProvider>


      {/* */}

    </div>
  )
}
