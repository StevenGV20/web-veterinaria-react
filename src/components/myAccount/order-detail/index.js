import React from 'react'
import MessageStock from '../../checkout/messageStock'
import Table from '../../widgets/table'
import './_.css'
export default function OrderDetail({order}) {

  console.log(order);
  return (
    <div className="order-detail-container">
      <div className="order-detail-data">
        <div className="order-detail-data-span">
          <b>Nro de Orden:</b> <span>{order.id}</span>
        </div>
        <div className="order-detail-data-span">
          <b>Fecha de Registro:</b> <span>{order.fechaRegistro}</span>
        </div>
        <div className="order-detail-data-span">
          <b>Monto:</b> <span>S/. {order.monto}</span>
        </div>
      </div>
      <div className="mx-auto w-11/12">
        <Table>
          {
            order.items.map(item => (
              <tr>
                <div className="order-detail-tb-row">
                  <div className="order-detail-tb-img">
                    <img className="w-full" src={item.img} alt=""/>
                  </div>
                  <div className="order-detail-tb-content">
                    <span className="title">{item.name}</span>
                    <MessageStock stock={item.stock}/>
                    <span>Cant: {item.can}</span><br/>
                    <span>Precio: S/. {item.price}</span>
                  </div>
                  <div className="order-detail-tb-monto">
                    <span>S/. {item.price}</span>
                  </div>
                </div>
              </tr>
            ))
          }
        </Table>
        <div className="order-detail-summary">
          <div className="order-detail-summary-content">
            <div>
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <div>
              <p>IGV</p>
              <p>$262.00</p>
            </div>
            <div>
              <p>Descuento</p>
              <p>$262.00</p>
            </div>
            <div className="border-t border-black">
              <b>Total</b>
              <b className="w-full text-right">$262.00</b>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
