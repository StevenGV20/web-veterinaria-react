import React from 'react'
import OrderDetail from '../../../components/myAccount/order-detail'

export default function OrderDetailsPage(props) {
  const id = props.match.params.id;
  const order = {
    id: id,
    nro: '00083242341',
    fechaRegistro: '2021-11-20',
    monto: '2345.00',
    url: '/my-account/order-history/00083242341',
    items: [
      {
        id: "001",
        name:"Comida para perro",
        price: 25,
        stock: 100,
        can: 3,
        img:'https://firebasestorage.googleapis.com/v0/b/veterinariaweb-a901c.appspot.com/o/Fri%20Jun%2011%202021%2010%3A55%3A52%20GMT-0500%20(Peru%20Standard%20Time)-undefined?alt=media&token=4e210617-d3e6-4d6e-a339-596c11208d33'
      },
      {
        id: "001",
        name:"Comida para perro",
        price: 25,
        stock: 2,
        can: 4,
        img:'https://firebasestorage.googleapis.com/v0/b/veterinariaweb-a901c.appspot.com/o/Fri%20Jun%2011%202021%2010%3A55%3A52%20GMT-0500%20(Peru%20Standard%20Time)-undefined?alt=media&token=4e210617-d3e6-4d6e-a339-596c11208d33'
      }
    ]
  }
  return (
    <>
      <OrderDetail order={order}/>
    </>
  )
}
