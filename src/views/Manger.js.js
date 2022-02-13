import React, { useState } from "react"
import mangerBg from "assets/pages/manger-bg.jpg"
import { displayHoursMinutes, getCurrentCreneau, getDateFormatted } from "utils/timeManager"
import Background from "components/Background"
import { gray1, gray2, restaux, slimFont } from "variables/constants"
import SlimText from "components/SlimText"
import Click from "components/Click"
import { Fragment } from "react/cjs/react.production.min"
import { getiRestau, incrementiRestau, resetiRestau } from "utils/localstorageTools"



export default function Manger() {
  const [iRestau, setiRestau] = useState(getiRestau())

  return (
    <Fragment>
      <Background image={mangerBg} />
      <SlimText
        value={restaux[iRestau]}
        color
        pos={[3.55, 11.75]} />
      <SlimText
        value={displayHoursMinutes(getCurrentCreneau())}
        color={gray1}
        pos={[3.85, 13.55]} />
      <Click to="/reserved" pos={[1, 8]} dim={[24, 9]} />
      <div
        style={{
          position: `absolute`,
          left: `3rem`,
          top: `1rem`,
          // border: `2px solid red`,
          width: `8rem`,
          height: `2rem`,
        }}
        onClick={() => setiRestau(resetiRestau())}
      >
      </div>
      <div
        style={{
          position: `absolute`,
          left: `13rem`,
          top: `1rem`,
          // border: `2px solid red`,
          width: `8rem`,
          height: `2rem`,
        }}
        onClick={() => setiRestau(incrementiRestau(iRestau,restaux))}
      >
      </div>

    </Fragment>
  )
}
