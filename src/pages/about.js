import React from 'react'

import { Layout, Menu, SEO } from 'src/components'

const About = ({ location }) => {
  return (
    <Layout location={location} title="About me">
      <SEO title="About me" />
      <Menu />
      About me page
    </Layout>
  )
}

export default About

