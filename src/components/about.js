import React from "react"

import AboutStyles from "./about.module.scss"
import { Link } from "gatsby"

export default function About() {
  return (
    <div className={AboutStyles.about}>
      <div className={AboutStyles.container}>
        <div className={AboutStyles.portrait}></div>

        <div className={AboutStyles.info}>
          <h2>Madebyll</h2>
          <p>
            Hallo, bedankt voor het bezoeken van deze website. Heeft u vragen
            over een van de werken of interesse? Dan ben ik te bereiken via de
            mail.
          </p>
          <Link className={AboutStyles.button} to="/contact">
            Kom in contact!
          </Link>
        </div>
      </div>
    </div>
  )
}
