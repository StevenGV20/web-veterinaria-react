import React from 'react'
import Breadcrumb from '../../components/widgets/breadcrumb'

export default function ProductList(props) {
  const links = [
    {id:1,url:'/products',name:'Lista de Productos',actual:true}
  ]
  return (
    <div>
      <Breadcrumb links={links}/>
    </div>
  )
}
