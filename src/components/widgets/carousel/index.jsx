import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './_.css'

export default function Carousel({
  numItems,numView,children,
  width=100,height=125,orientation='horizontal',
  ...props
}) {
  const [carouselItems, setCarouselItems] = useState(children);
  useEffect(() => {
    setCarouselItems([...children]);
  }, [children]);

  return (
    <div className="carousel-container">
      <CarouselProvider
        naturalSlideWidth={width}
        naturalSlideHeight={height}
        totalSlides={numItems}
        visibleSlides={numView}
        currentSlide={1}
        infinite={true}
        isPlaying={true}
        interval={5000}
        orientation={orientation}
        hasMasterSpinner={carouselItems.length > 0 ? false : true}
      >
        <Slider>    
            {
              carouselItems.length < 1 ? 
                <div className="h-48 mb-4"></div>
              : (
                <>   
                  {carouselItems.map((item, index) => (
                    <Slide index={index} key={index}>
                      {item}
                    </Slide>
                  ))}
                </>
              )
            }
        </Slider>
        {orientation === 'horizontal' && carouselItems.length > 1 ? 
          <>
          <ButtonBack className={`carousel-arrow back ${width < 50 ? 'miniature' : ''}`}> {'<'} </ButtonBack>
          <ButtonNext className={`carousel-arrow next ${width < 50 ? 'miniature' : ''}`}> {'>'} </ButtonNext>
          </>
        : ""}
        

      </CarouselProvider>


      {/* */}

    </div>
  )
}
