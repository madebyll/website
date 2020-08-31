import React from "react"
import Wrapper from './wrapper'

import FooterStyles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={FooterStyles.footer}>
      <Wrapper>
        <p>Madebyll, copyright &copy; 2020</p>
      </Wrapper>
    </footer>
  )
}
