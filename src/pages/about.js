import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <p>
        This is the about page.{" "}
        <Link to="/contact">Feel free to contact me</Link>!
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
