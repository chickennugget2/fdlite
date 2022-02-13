import React from "react"
import { gray1, slimFont } from "variables/constants"

export default function SlimText({
  value,
  pos = [0, 0],
  color = gray1,
  fontSize = 100,
  fontFamily,
  slim
}) {
  if (slim) fontFamily = slimFont
  return (
    <div
      style={{
        position: "absolute",
        fontFamily: fontFamily,
        color: color,
        left: `${pos[0]}rem`,
        top: `${pos[1]}rem`,
        fontSize: `${fontSize}%`,
      }}
    >
      {value}
    </div>
  )
}
