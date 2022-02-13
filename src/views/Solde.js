import React, { Fragment } from 'react'
import soldeBg from "assets/pages/solde-bg.jpg"
import SlimText from 'components/SlimText'
import Background from 'components/Background'
import { getDateFormatted } from 'utils/timeManager'

export default function Solde() {
  return (
    <Fragment>
      <div className="all">
        <Background image={soldeBg} />
        <SlimText
          value={getDateFormatted()}
          pos={[0.6, 2.5]}
          fontSize={90}
          slim
        />
      </div>
    </Fragment>
  )
}
