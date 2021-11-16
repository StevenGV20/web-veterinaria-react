import React from 'react'
import { Link } from 'react-router-dom';
import './_.css'

export default function Carousel() {
  const products = [
    {id:1,name:"producto 1",precio:"345.00",url:"/product/1",img:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {id:2,name:"producto 2",precio:"345.00",url:"/product/2",img:"https://dummyimage.com/400x400/edf2f7/0f1631"}
  ];
  return (
    <>
      <div class="text-gray-600 flex flex-wrap -m-4">
        {
          products.map(p => (
            <Link className="p-4 lg:w-1/4 md:w-1/2" to={p.url}>
              <div className="h-full flex flex-col items-center text-center bg-gray-800 rounded-lg">
                  <img alt="team"
                      className="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4"
                      src={p.img}/>
                  <div className="w-full ">
                      <h2 className="title-font font-medium text-lg text-white">{p.name}</h2>
                      <h3 className="mb-3">{p.precio}</h3>
                  </div>
              </div>
          </Link>
          ))
        }
      </div>
    </>
  )
}
