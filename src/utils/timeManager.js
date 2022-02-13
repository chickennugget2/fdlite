import dateformat from "dateformat"

export function getCurrentCreneau() : Date {
  const time = new Date()
  var minute = time.getMinutes()
  if (minute < 15) {
    minute = 0
  } else if(minute <30) {
    minute = 15
  } else if (minute <45) {
    minute = 30
  } else {
    minute = 45
  }
  time.setMinutes(minute)
  return time
}

export function getNextCreneau() {
  const currentCreneau = getCurrentCreneau()
  currentCreneau.setMinutes(currentCreneau.getMinutes() + 15 )
  return currentCreneau
}

export function displayHoursMinutes(time: Date) : String{
  return dateformat(time, `HH:MM`)
}

export function getDateFormatted(time: Date) {
  const now = new Date()
  return `Le ${dateformat(now, `dddd dd mmmm`)} à ${dateformat(now, `HH`)}h${dateformat(now, `MM`)}`
}



