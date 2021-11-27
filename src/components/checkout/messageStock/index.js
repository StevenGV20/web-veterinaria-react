import React from 'react'

export default function MessageStock({stock}) {
  return (
    <div className="text-xl font-bold text-left p-1 italic uppercase">
      {
        stock > 10 ? (
          <div className="text-green-600">
            En stock
          </div>
        ) :
        (
          <div className="text-red-600">
            Sin stock
          </div>
        )
      }
    </div>
  )
}
