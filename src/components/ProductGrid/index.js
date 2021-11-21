import React from 'react';
import './_.css';
import ProductCard from '../product/product-card';
export default function ProductGrid() {
  const productos = [
    {idproducto:1,nombre:"producto 1",precio:"345.00",url:"/product/1",foto1:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {idproducto:2,nombre:"producto 2",precio:"345.00",url:"/product/2",foto1:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {idproducto:3,nombre:"producto 1",precio:"345.00",url:"/product/1",foto1:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {idproducto:4,nombre:"producto 2",precio:"345.00",url:"/product/2",foto1:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {idproducto:5,nombre:"producto 1",precio:"345.00",url:"/product/1",foto1:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {idproducto:6,nombre:"producto 2",precio:"345.00",url:"/product/2",foto1:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {idproducto:7,nombre:"producto 1",precio:"345.00",url:"/product/1",foto1:"https://dummyimage.com/400x400/edf2f7/0f1631"},
    {idproducto:8,nombre:"producto 2",precio:"345.00",url:"/product/2",foto1:"https://dummyimage.com/400x400/edf2f7/0f1631"}
  ];
  
  return (
    <div className="product-grid-container">
      {
        productos.map(p => (
          <div className="product-grid-item" key={p.idproducto}>
            <ProductCard product={p}/>
          </div>
        ))
      }
    </div>
  )
}
