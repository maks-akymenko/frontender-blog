import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Layout, Menu, SEO } from 'src/components'

const Contact = ({ location }) => {
  return (
    <Layout location={location} title="Contact">
      <SEO title="Contact" />
      <Menu />
      Contact info about me
      <form method="post" netlify-honeypot="bot-field" data-netlify="true">
        <label>Name
          <input type="text" name="name" id="name" />
        </label>
        <label>Email
          <input type="email" name="email" id="email" />
        </label>
        <label>Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </Layout>
  )
}

Contact.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default Contact

