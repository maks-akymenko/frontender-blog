import React from 'react'

import { Layout, Menu, SEO } from 'src/components'

const Contact = ({ location }) => {
  return (
    <Layout location={location} title="Contact me">
      <SEO title="Contact me" />
      <Menu />
      Contact me
  </Layout>
  )
}

export default Contact

