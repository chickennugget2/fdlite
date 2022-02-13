import React from "react"
import { useLocation } from "react-router-dom";
import Click from "./Click"

export default function Menu() {
  const w = 6
  const location = useLocation();
  if (location.pathname == `/reserved`) {
    return null
  }

  return (
    <div
      style={{
        position: `absolute`,
        height: `5rem`,
        width: `100%`,
        bottom: 0,
        // border: `2px solid red`,
      }}
    >
      <Click to={`/`} pos={[0, 0]} dim={[w,5]} />
      <Click to={`/manger`} pos={[w, 0]}  dim={[w,5]}/>
      <Click to={`/solde`} pos={[2*w, 0]}  dim={[w,5]}/>
      <Click to={`/profil`} pos={[3*w, 0]} dim={[w,5]} />
    </div>
  )
}
