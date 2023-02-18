import React from 'react'

export default function JSXExample() {
    const username= "Surya"
    const h1El = <h1>Hello {username}</h1>
  return (
    <div>
        {h1El}
    </div>
  )
}
