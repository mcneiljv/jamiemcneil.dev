import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>
        This is the about page.{" "}
        <Link to="/contact">Feel free to contact me</Link>!
      </p>
    </Layout>
  )
}

export default AboutPage
