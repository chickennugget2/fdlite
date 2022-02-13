import React from "react"
import { Link } from "react-router-dom"

export default function Click({ to, pos = [0, 0], dim = [5, 5] }) {
  return (
    <Link
      style={{
        position: `absolute`,
        left: `${pos[0]}rem`,
        top: `${pos[1]}rem`,
        // border: `2px solid red`, // TEST
        width: `${dim[0]}rem`,
        height: `${dim[1]}rem`,
      }}
      to={to}
    />
  )
}
