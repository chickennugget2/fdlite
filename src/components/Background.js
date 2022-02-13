import React from 'react'

export default function Background({ image }) {
  return (
    <img
      className="background"
      src={image}
      style={{
        position: `absolute`,
        left: 0,
        top: 0,
        width: `100%`,
        zIndex: -1
      }}
    />
  )
}
