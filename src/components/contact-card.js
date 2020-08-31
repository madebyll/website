import React from "react"

import ContactCardStyles from "./contact-card.module.scss"

export default function ContactCard() {
  return (
    <div className={ContactCardStyles.contactCard}>
      <div className={ContactCardStyles.contactMessage}>
        <h3>Kom in contact!</h3>
        <p>
          Hallo, bedankt voor het bezoeken van deze website. Heeft u vragen over
          een van de werken of interesse? Dan ben ik te bereiken via de mail.
        </p>
      </div>
      <div className={ContactCardStyles.contactInfo}>
        <div className={ContactCardStyles.contactContainer}>
          <div>
            <img src="/img/icons8-important-mail-50.png" alt="mail" />
            <p>made.by.ll@hotmail.com</p>
          </div>
          <div>
            <img src="/img/icons8-ringing-phone-50.png" alt="phone" />
            <p>06 36 21 29 37</p>
          </div>
          {/* <div>
            <img src="/img/icons8-twitter-squared-50.png" alt="twitter" />
            <p>@tweethandle</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
