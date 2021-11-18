import React from 'react'
import Breadcrumb from '../../components/widgets/breadcrumb'

export default function ServiceDetail(props) {
  const links = [
    {id:1,url:'/products',name:'Servicios',actual:false},
    {id:2,url:`/products/${props.match.params.id}`,name:'Producto',actual:true}
  ]
  return (
    <div>
      <Breadcrumb links={links}/>
      ServiceDetail
    </div>
  )
}
