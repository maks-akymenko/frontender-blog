import React from 'react'

import { CookieButton, CookieContainer } from './buymeacoffee.styled'

import { Emoji } from 'src/styles/Emoji'

const BuyMeACoffee = () => (
  <CookieContainer>
    <p>Was the article useful <Emoji label="thinking">🤔</Emoji>?</p>
    <CookieButton
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.buymeacoffee.com/ID45PaA">
      <img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee" />
      <span>Buy me a coffee</span>
    </CookieButton>
  </CookieContainer>
);

export default BuyMeACoffee


