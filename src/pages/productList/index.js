import React from 'react'
import AsideFilter from '../../components/widgets/asdieFilter'
import Breadcrumb from '../../components/widgets/breadcrumb'
import ProductGrid from '../../components/ProductGrid'

export default function ProductList(props) {
  const links = [
    {id:1,url:'/products',name:'Productos',actual:true}
  ]
  return (
    <div>
      <Breadcrumb links={links}/>
      <AsideFilter>
        <ProductGrid />
      </AsideFilter>
    </div>
  )
}
