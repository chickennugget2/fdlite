import reservedBg from "assets/pages/reserved-bg.jpg"
import { useState } from "react"
import { gray1, gray2, restaux, times } from "variables/constants"
import {
  displayHoursMinutes,
  getCurrentCreneau,
  getNextCreneau,
} from "utils/timeManager"
import Background from "components/Background"
import { Fragment } from "react/cjs/react.production.min"
import SlimText from "components/SlimText"
import dateformat from "dateformat"
import Click from "components/Click"
import { Link } from "react-router-dom"
import { getiRestau, incrementiRestau } from "utils/localstorageTools"


export default function Reserved() {
  const [iRestau, setiRestau] = useState(getiRestau())
  const [creneau] = useState(getCurrentCreneau(new Date()))
  const currentCreneau = getCurrentCreneau()
  const nextCreneau = getNextCreneau()

  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  return (
    <Fragment>
      <Background image={reservedBg} />
      <div className="all" style={{
        position: "relative",
        marginTop: `-1.8rem`,
        marginLeft: `0.7rem`,
      }}>
        <div onClick={() => setiRestau(incrementiRestau(iRestau, restaux))}>
          <SlimText
            pos={[4.1, 2.85]}
            fontFamily="Calibri"
            fontSize={120}
            color
            value={restaux[iRestau]}

          />
        </div>

        <SlimText
          pos={[9, 8.7]}
          fontSize={80}
          color={gray2}
          value={dateformat(new Date(), `mmmm`).toUpperCase()}
        />


        <div
          style={{
            // border: "2px solid red",
            color: "white",
            left: "9.5rem",
            top: "12.5rem",
            position: "absolute",
            textAlign: "center"
          }}>
          <div
            style={{
              // border: "2px solid red",
              display: `inline-block`,
              left: "0rem",
              top: "0rem",
              textAlign: "center",
              color: "white",

            }}
          >
            <div style={{ fontSize: "1rem" }}>{dateformat(today, `ddd`).toUpperCase()}</div>
            <div style={{ fontSize: "3rem" }}>{dateformat(today, `dd`).toUpperCase()}</div>
          </div>

          <div
            style={{
              color: gray1,
              left: "16rem",
              textAlign: "center",
              display: `inline-block`,
              marginLeft: `3.7rem`

            }}
          >
            <div style={{ fontSize: "0.8rem" }}>{dateformat(tomorrow, `ddd`).toUpperCase()}</div>
            <div style={{ fontSize: "2.2rem" }}>{dateformat(tomorrow, `dd`).toUpperCase()}</div>

          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "2.5rem",
            top: "34rem",
            fontSize: "2.9rem",
            color: gray2,
          }}
        >
          <span>{displayHoursMinutes(currentCreneau)}</span> -{" "}
          <span>{displayHoursMinutes(nextCreneau)}</span>
        </div>

        <Click to="/manger" dim={[3, 3]} pos={[0, 2]} />
      </div>
      <Link
        style={{
          // border: "2px solid green",
          position: `absolute`,
          width: `100%`,
          height: `5rem`,
          bottom: 0,
        }}
        to="/manger"
      />
    </Fragment>

  )
}
