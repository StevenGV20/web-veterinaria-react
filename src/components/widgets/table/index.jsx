import React from 'react'
import './_.css'

export default function Table({cols,children}) {
 
  
  
  return (
      <div className="table-container">
        <div className="table-container-p">
          <div className="table-container-content">
            <table className="table-container-tb">
              <thead className="bg-gray-50">
                <tr>
                  {cols && cols.map(col => (
                    <th
                    scope="col"
                    key={col}
                    className="table-container-th"
                  >
                    {col}
                  </th>
                  ))}
                </tr>
              </thead>
              <tbody className="table-container-tbody">
                {children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}
