import React, { useState } from 'react'
import Carousel from '../widgets/carousel'
import './_.css'

export default function ProductDetail({product}) {
  /* const images = [
    <img src={product.images[0].src} alt="" className="product-detail-img"/>,
    <img src={product.images[1].src} alt="" className="product-detail-img"/>,
    <img src={product.images[2].src} alt="" className="product-detail-img"/>
  ] */
  const [image, setImage] = useState(product.images[1].src);
  const onChangeImage = (event) => {
    setImage(event.target.src);
  }
  const widthW = window.innerWidth;
  
  return (
    <div className="product-detail-container">
      <div className="product-detail-container-images">
        <img src={image} alt="" className="product-detail-img"/>
        <div className="product-detail-carousel">
          <Carousel numItems={3} numView={2} height={20} width={25}>
            <img src={product.images[1].src} alt="" onClick={onChangeImage} className="product-detail-img"/>
            <img src={product.images[2].src} alt="" onClick={onChangeImage}  className="product-detail-img"/>
            <img src={product.images[1].src} alt="" onClick={onChangeImage}  className="product-detail-img"/>
          </Carousel> 
        </div>
      </div>
      <div className="product-detail-details-content">
        <h3 className="product-detail-title">{product.name}</h3>
        <span className="product-detail-price">{product.price}</span>
        {
          product.stock > 5 ?
          <><p>En stock</p>
          <button className="btn btn-indigo product-detail-add-cart">Agregar al Carrito</button></>
          : <><p>Ya no hay stock</p>
          <button className="btn btn-block product-detail-add-cart">Agregar al Carrito</button></>
        }
        

        <p className="product-detail-description"><b>Description: </b><br/>{product.description}</p>
        <p className="product-detail-description"><b>Caracteristicas: </b><br/>{product.highlights}</p>
        <p className="product-detail-description"><b>Details: </b><br/>{product.details}</p>
      </div>
    </div>
  )
}
