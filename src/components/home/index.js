import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../widgets/carousel'
import ProductCard from '../product/product-card'
import './_.css'

export default function Home() {

  const products = [
    {id:1,name:"producto 1",precio:"345.00",url:"/product/1",img:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {id:2,name:"producto 2",precio:"345.00",url:"/product/2",img:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {id:3,name:"producto 1",precio:"345.00",url:"/product/1",img:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {id:4,name:"producto 2",precio:"345.00",url:"/product/2",img:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {id:5,name:"producto 1",precio:"345.00",url:"/product/1",img:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {id:6,name:"producto 2",precio:"345.00",url:"/product/2",img:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {id:7,name:"producto 1",precio:"345.00",url:"/product/1",img:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {id:8,name:"producto 2",precio:"345.00",url:"/product/2",img:"https://dummyimage.com/400x400/edf2f7/0f1631"}
  ];
  const windowWidth = window.innerWidth;
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
      <Carousel numItems={products.length} numView={windowWidth > 1000 ? 4 : windowWidth > 600 ? 3 : windowWidth > 400 ? 2 : 1}>
        {products.map( (product) => 
          <ProductCard product={product}/>
        )}
      </Carousel> 
    </div>
  )
}
