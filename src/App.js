import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Acceuil from "views/Acceuil"
import Reserved from "views/Reserved"
import Loading from "views/Loading"
import Manger from "views/Manger.js"
import { Fragment } from "react/cjs/react.production.min"
import Menu from "components/Menu"
import Solde from "views/Solde"
import Profil from "views/Profil"

function App() {
  const [loading, setLoading] = useState(true) // TEST was true
  const waitTime = 2000 // ms
  useEffect(() => setTimeout(() => setLoading(false), waitTime)) // TEST uncomment
  return (
    <Fragment>
      <Router basename="/fdlite">
        <Menu />
        <div>
          <Routes>
            <Route
              path="/"
              element={loading ? <Loading /> : <Acceuil />}
            />
            <Route path="/manger" element={<Manger />} />
            <Route path="/solde" element={<Solde />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/reserved" element={<Reserved />} />
          </Routes>
        </div>
      </Router>
    </Fragment>
  )
}

export default App
