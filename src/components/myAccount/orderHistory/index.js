import React from 'react'
import { NavLink } from 'react-router-dom';
import { ViewIcon } from '../../utils/icons-svg';
import Table from '../../widgets/table'
import './_.css';
export default function OrderHistory() {
  const cols = ["Nro.","Fecha Registro","Items","Monto","Ver"]

  const people = [
    {
      nro: '00083242341',
      fechaRegistro: '2021-11-20',
      items: '4',
      monto: '2345.00',
      url: '/my-account/order-history/00083242341',
    },
  ]
  return (
    <div className="order-history-container">
      <h3 className="order-history-title">Order History</h3>
      <p className="order-history-description">Aqui puedes consultar el historial de tus ordenes</p>
      <div className="order-history-table"> 
        <Table cols={cols}>
          {people.map((orden) => (
            <tr key={orden.email}>
              {console.log(Object.keys(orden).length)}
              <td className="table-container-td">
                <div className="title-1">{orden.nro}</div>
              </td>
              <td className="table-container-td">
                <div className="title-2">{orden.fechaRegistro}</div>
              </td>
              <td className="table-container-td">
                <span className="title-2">
                  {orden.items}
                </span>
              </td>
              <td className="table-container-td">
                <span className="title-3">
                  {orden.monto}
                </span>
              </td>
              <td className="table-container-td">
                <span className="title-1">
                  <NavLink to={orden.url}><ViewIcon className="icon-size"/></NavLink>
                </span>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  )
}
