import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../widgets/carousel'
import './_.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-container-banner">
        <div className="home-container-banner-p">
          <div className="home-container-banner-div">
            <div className="home-container-info">
              <h1 className="home-container-info-title">
                Summer styles are finally here
              </h1>
              <p className="home-container-info-des">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
              <div className="home-container-info-container-button">
                <Link
                  to="/products"
                  className="home-container-info-button"
                >
                  Shop products
                </Link>
                <Link
                  to="/services"
                  className="home-container-info-button"
                >
                  Request Services
                </Link>
              </div>
            </div>
            <div>
              <div className="home-container-promo-container">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="home-container-promo-images-content"
                >
                  <div className="home-container-promo-animation">
                    <div className="home-container-promo-content">
                      <div className="home-container-promo-group">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="home-container-promo-group">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  )
}
