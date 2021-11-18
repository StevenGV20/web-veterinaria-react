import React from 'react'
import Breadcrumb from '../../components/widgets/breadcrumb'

export default function ServiceList() {
  const links = [
    {id:1,url:'/products',name:'Servicios',actual:true}
  ]
  return (
    <div>
      <Breadcrumb links={links}/>
    </div>
  )
}
