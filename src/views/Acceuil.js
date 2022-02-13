import React from "react"
import accueilBg from "assets/pages/accueil-bg.jpg"
import { getDateFormatted } from "utils/timeManager"
import Background from "components/Background"
import SlimText from "components/SlimText"
import Click from "components/Click"
import { Fragment } from "react/cjs/react.production.min"

export default function Acceuil() {
  return (
    <Fragment>
      <div className="all">
        <Background image={accueilBg} />
        <SlimText 
        value={getDateFormatted()} 
        pos={[1.6, 19.2]} 
        fontSize={90}
        slim />
      </div>
    </Fragment>
  )
}
