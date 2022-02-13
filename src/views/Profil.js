import React, { Fragment } from 'react'
import profilBg from "assets/pages/profil-bg.jpg"
import Background from 'components/Background'
import SlimText from 'components/SlimText'

export default function Profil() {
  return (
    <Fragment>
      <div className="all">
        <Background image={profilBg} />
      </div>
    </Fragment>
  )
}
